describe("Application Methods", () => {
    it(".getShortcuts should return the shortcut config defined in the manifest", async () => {
        let page = await getWindowByTitle("Testing App");

        const [response] = await Promise.all([
            page.click("#application-link"),
            page.waitFor(1500)
        ]);

        const [response1] = await Promise.all([
            page.click("#get-shortcuts"),
            page.waitFor(1000)
        ]);

        let appShortcutConfig = await page.$eval(
            "#get-shortcuts-message",
            el => el.textContent
        );

        appShortcutConfig = JSON.parse(appShortcutConfig);

        expect(appShortcutConfig.desktop).to.equal(true);
        expect(appShortcutConfig.startMenu).to.equal(false);
        expect(appShortcutConfig.systemStartup).to.equal(false);
    });
});
