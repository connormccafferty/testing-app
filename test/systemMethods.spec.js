const esmImport = require("esm")(module);
const systemMethods = esmImport("../src/tests/systemMethods").default;
const mapPageElements = require("../helpers/pageElements");

const pageElements = mapPageElements(systemMethods);

describe("System Methods", () => {
  it(".getVersion should return the runtime version declared in the manifest", async () => {
    let page = await getWindowByTitle("Testing App");

    const [response] = await Promise.all([
      page.click("#system-link"),
      page.waitFor(1000)
    ]);

    let manifestVersion = "14.78.45.31";

    await page.click(pageElements[".getVersion"].button);

    let ofVersion = await page.$eval(
      pageElements[".getVersion"].message,
      el => el.textContent
    );

    assert.equal(ofVersion, manifestVersion);
  });
});
