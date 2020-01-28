const esmImport = require("esm")(module);
const windowMethods = esmImport("../src/tests/windowMethods").default;
const mapPageElements = require("../helpers/pageElements");

const pageElements = mapPageElements(windowMethods);

describe("Window Methods", async () => {
  it(".identity should match the name and uuid declared in the manifest", async () => {
    let page = await getWindowByTitle("Testing App");

    const [response] = await Promise.all([
      page.click("#window-link"),
      page.waitFor(1000)
    ]);

    const [response1] = await Promise.all([
      page.click(pageElements[".identity"].button),
      page.waitFor(1000)
    ]);

    let windowIdentity = await page.$eval(
      pageElements[".identity"].message,
      el => el.textContent
    );

    assert.equal(JSON.parse(windowIdentity).name, "testing-app");
    assert.equal(JSON.parse(windowIdentity).uuid, "testing-app");
  });

  it(".create should create a child window", async () => {
    let page = await getWindowByTitle("Testing App");

    const [response] = await Promise.all([
      page.click("#window-link"),
      page.waitFor(1000)
    ]);

    const [response1] = await Promise.all([
      page.click(pageElements[".createWindow"].button),
      page.waitFor(1000)
    ]);

    let childPage = await getWindowByTitle("Child Window");

    const wHandle = await page.evaluateHandle(() => window);
    const childWindows = await page.evaluate(
      window =>
        Promise.resolve(
          window.fin.Application.getCurrentSync().getChildWindows()
        ),
      wHandle
    );
    console.log(childWindows);
  });
});
