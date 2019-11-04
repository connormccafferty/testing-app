describe("Window Methods", () => {
    it(".identity should match the name and uuid declared in the manifest", async () => {
        let page = await getWindowByTitle("Testing App");

        const [response] = await Promise.all([
            page.click("#window-link"),
            page.waitFor(1000)
        ]);

        const [response1] = await Promise.all([
            page.click("#get-identity"),
            page.waitFor(1000)
        ]);

        let windowIdentity = await page.$eval(
            "#get-identity-message",
            el => el.textContent
        );

        // windowIdentity = JSON.parse(windowIdentity);

        assert.equal(JSON.parse(windowIdentity).name, "testing-app");
        assert.equal(JSON.parse(windowIdentity).uuid, "testing-app");
    });
});
