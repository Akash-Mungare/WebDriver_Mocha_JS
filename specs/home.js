const { Browser } = require("selenium-webdriver");
const util = require('./util');

function home(){
    describe ('Home', () => {
        it('Home', async () => {
            const homebtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[1]/div');
            await (await homebtn).click();
            await util.wait(4000);

            const pathBtn = $('//*[@mattooltip="Click here for path tracing data"]');
            await (await pathBtn).click();
            await util.wait(2000);

            const pathToday = $('//*[@class="mat-radio-inner-circle"]');
            const pathAsset = $('//*[@formcontrolname="deviceName"]');
            // const pathsuggestion = $('//*[@class="mat-option-text"]');
            const pathSubmit = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
            const pathMap = $('//*[@class="mat-card mat-focus-indicator ml-3 mr-3 card"]');

            await (await pathToday).click();
            await util.wait(2000);
            await (await pathAsset).setValue("Akash");
            await util.wait(2000);
            // await (await pathsuggestion).click();
            // await util.wait(2000);
            await (await pathSubmit).click();
            await util.wait(2000);
            pathMap.scrollIntoView()
            await util.wait(8000);
        });
    }); 
};

module.exports = home();