(async () => {
    const mount = document.getElementById("footer");
    if (!mount) return;

    const scriptUrl = new URL(document.currentScript.src, location.href);
    const footerUrl = new URL("../footer.html", scriptUrl);

    console.log("include.js:", scriptUrl.href);
    console.log("footer url:", footerUrl.href);

    try {
        const res = await fetch(footerUrl.href, { cache: "no-store" });
        console.log("footer status:", res.status);

        if (!res.ok) {
            mount.innerHTML = `<div style="color:red">footer load failed: ${res.status}</div>`;
            return;
        }

        mount.innerHTML = await res.text();
    } catch (e) {
        console.error(e);
        mount.innerHTML = `<div style="color:red">footer load error</div>`;
    }
})();
