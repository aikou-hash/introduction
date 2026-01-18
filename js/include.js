async function include(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
        console.error("include failed:", res.status, url);
        return;
    }
    el.innerHTML = await res.text();
}

(async () => {
    // index.html と同階層から見た相対パス
    await include("#sidebar", "components/sidebar.html");
    await include("#footer", "components/footer.html");
})();