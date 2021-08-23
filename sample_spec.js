const { browser, by,Builder, element, ExpectedConditions,$$, $ } =require('protractor');
const { protractor } =require('protractor/built/ptor');
const support = require('protractor-firefox-support');

async function elementRightclick(clickTgt,location){
    return await browser.executeScript(support.rightMouseBtnClick, clickTgt,
        {location: {x: Math.floor(location.x), y: Math.floor(location.y)}});
}

describe('Sample Right click Testing for firefox',()=>{
    beforeAll(async()=>{
        await browser.get(browser.params.url);
        console.log("hello")
        await browser.sleep(15000);
    });
    it('check for Element right click',async()=>{
        // await browser.findElement(by.css('.App-link')).sendKeys(protractor.Button.RIGHT);
        // $('body').sendKeys(protractor.Key.RIGHT);
        // $('body').sendKeys(protractor.Key.ESCAPE);
        // expect('').toBe("");
        
        let body=element(by.css('.menu-div'));
        

        // await browser.wait(protractor.ExpectedConditions.visibilityOf(body), 5000);
        // await body.sendKeys(protractor.Button.RIGHT);

        // const contextMenu = $$('.k-item.k-state-default.k-first').first();
        const location = await body.getLocation();
        await elementRightclick('.menu-div',location);
       
       
       
        await browser.sleep(1000);
        const clickTgt =element(by.css('.contextMenu'));

        await browser.wait(protractor.ExpectedConditions.visibilityOf(clickTgt), 5000);


        expect(await clickTgt.isDisplayed()).toBeTrue;
    });
    afterAll(async()=>{
        await browser.close();
    });
});