function withBase(path) {
    const base = document.body.dataset.base || "./";
    return base + path;
}

async function include(selector, path) {
    const el = document.querySelector(selector);
    if (!el) return;

    const url = withBase(path);
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
        console.error("include failed:", res.status, url);
        return;
    }
    el.innerHTML = await res.text();
}

(async () => {
    await include("#sidebar", "components/sidebar.html");
    await include("#footer", "components/footer.html");
})();
