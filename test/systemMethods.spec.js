describe("System Methods", () => {
    it(".getVersion should return the runtime version declared in the manifest", async () => {
        let manifestVersion = "14.78.45.31";
        let page = await getWindowByTitle("Testing App");

        const [response] = await Promise.all([
            page.click("#system-link"),
            page.waitFor(1000)
        ]);

        await page.click("#get-version");

        let ofVersion = await page.$eval(
            "#get-version-message",
            el => el.textContent
        );

        assert.equal(ofVersion, manifestVersion);
    });
});
