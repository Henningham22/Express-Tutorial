require("chromedriver");
const { Builder, By, Key, until} = require("selenium-webdriver")

const{expect} = require("chai");

descrive("selenium tests", function(){
    this.timeout(30_000);

    it("should find Blouse", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try{
            await driver.get ("http://automationpractice.com/index.php");
            const search = await driver.findElement(By.id("searchbox"));
            await search.sendKeys("dresses",Key.ENTER);
            const result = await driver.findElement(By.css("#center_column"));
            expect(await result.getText()).to.equal("#product");
        } catch (err) {
            console.log(err)
        } finally {
            await driver.quit();
        }
    })

    it.skip ("should find a surprise", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try{
            driver.get("https://christophperrins.github.io/TestingSite/");
      const surprise = await driver.wait(until.elementLocated(By.css("#quote > h1")));
      expect(await surprise.getText()).to.equal("Surprise!")
    } finally{
      driver.quit();
    }
    return;
  });
});