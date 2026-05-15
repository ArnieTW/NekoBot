(function () {
    const owner = "ArnieTW";
    const repo = "NekoBot";
    const latestReleaseUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
    const fallbackUrl = `https://github.com/${owner}/${repo}/releases/latest`;
    const allReleasesUrl = `https://github.com/${owner}/${repo}/releases`;

    const selectors = {
        title: "[data-release-title]",
        meta: "[data-release-meta]",
        changelog: "[data-release-changelog]",
        download: "[data-release-download]",
        release: "[data-release-link]",
        status: "[data-release-status]"
    };

    const preferredAssetPattern = /\.(zip|msi|exe|7z)$/i;

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function linkify(value) {
        return value.replace(
            /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
            '<a href="$2">$1</a>'
        );
    }

    function inlineMarkdown(value) {
        return linkify(escapeHtml(value))
            .replace(/`([^`]+)`/g, "<code>$1</code>")
            .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    }

    function markdownToHtml(markdown) {
        const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
        const blocks = [];
        let paragraph = [];
        let list = [];

        function flushParagraph() {
            if (!paragraph.length) {
                return;
            }

            blocks.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
            paragraph = [];
        }

        function flushList() {
            if (!list.length) {
                return;
            }

            blocks.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
            list = [];
        }

        for (const line of lines) {
            const trimmed = line.trim();

            if (!trimmed) {
                flushParagraph();
                flushList();
                continue;
            }

            const heading = /^(#{1,3})\s+(.+)$/.exec(trimmed);
            if (heading) {
                flushParagraph();
                flushList();
                const level = Math.min(heading[1].length + 2, 4);
                blocks.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
                continue;
            }

            const bullet = /^[-*]\s+(.+)$/.exec(trimmed);
            if (bullet) {
                flushParagraph();
                list.push(bullet[1]);
                continue;
            }

            flushList();
            paragraph.push(trimmed);
        }

        flushParagraph();
        flushList();

        return blocks.join("");
    }

    function setText(selector, text) {
        document.querySelectorAll(selector).forEach((node) => {
            node.textContent = text;
        });
    }

    function setHtml(selector, html) {
        document.querySelectorAll(selector).forEach((node) => {
            node.innerHTML = html;
        });
    }

    function setHref(selector, href) {
        document.querySelectorAll(selector).forEach((node) => {
            node.href = href;
        });
    }

    function pickDownloadUrl(release) {
        const assets = Array.isArray(release.assets) ? release.assets : [];
        const preferredAsset = assets.find((asset) => preferredAssetPattern.test(asset.name || ""));
        const firstAsset = assets[0];
        return preferredAsset?.browser_download_url || firstAsset?.browser_download_url || release.html_url || fallbackUrl;
    }

    function formatDate(value) {
        if (!value) {
            return "";
        }

        return new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        }).format(new Date(value));
    }

    function applyRelease(release) {
        const title = release.name || release.tag_name || "Latest Release";
        const publishedDate = formatDate(release.published_at);
        const assetCount = Array.isArray(release.assets) ? release.assets.length : 0;
        const metaParts = [release.tag_name, publishedDate, assetCount ? `${assetCount} download asset${assetCount === 1 ? "" : "s"}` : ""]
            .filter(Boolean);
        const downloadUrl = pickDownloadUrl(release);
        const releaseUrl = release.html_url || allReleasesUrl;

        setText(selectors.title, title);
        setText(selectors.meta, metaParts.join(" · "));
        setHtml(selectors.changelog, release.body ? markdownToHtml(release.body) : "<p>No changelog was published for this release.</p>");
        setHref(selectors.download, downloadUrl);
        setHref(selectors.release, releaseUrl);
        setText(selectors.status, "Loaded from GitHub Releases.");
    }

    function applyFallback() {
        setText(selectors.title, "Latest Release");
        setText(selectors.meta, "Open GitHub Releases for the current build.");
        setHtml(selectors.changelog, "<p>The latest release notes could not be loaded. Open GitHub Releases to view downloads and the changelog.</p>");
        setHref(selectors.download, fallbackUrl);
        setHref(selectors.release, allReleasesUrl);
        setText(selectors.status, "GitHub release details are unavailable right now.");
    }

    async function loadRelease() {
        try {
            const response = await fetch(latestReleaseUrl, {
                headers: {
                    Accept: "application/vnd.github+json"
                }
            });

            if (!response.ok) {
                throw new Error(`GitHub returned ${response.status}`);
            }

            applyRelease(await response.json());
        } catch (error) {
            applyFallback();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadRelease);
    } else {
        loadRelease();
    }
})();
