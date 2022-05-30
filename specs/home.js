const { waitForServer } = require("selenium-webdriver/http/util")
const util = require('./util');

function home(){
    describe ('Home', () => {
        it('Path Tracking', async () => {
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
            // await util.wait(2000);
            // await (await pathsuggestion).click();
            // await util.wait(2000);
            await (await pathSubmit).click();
            await util.wait(2000);
            pathMap.scrollIntoView()
            await util.wait(2000);

            const pathBackBtn = $('//*[@mattooltip="Back to Home page"]');
            pathBackBtn.scrollIntoView();
            await util.wait(4000);
            await (await pathBackBtn).click();
            await util.wait(2000);

        });

        it('Heat Map', async () => {
            const heatBtn = $('//*[@mattooltip="Click here for heat map data"]');
            await (await heatBtn).click();
            await util.wait(4000);
            let x = Math.floor(Math.random() * 2) + 1;
            for (let i=x; i<=2; i++)
            {
                console.log("=============================== i =", i);
                const heatDay = $(`/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-heat-map/div[2]/mat-card/mat-card-content/form/div/mat-radio-group/mat-radio-button[${i}]/label/span[1]/span[2]`);
                const heatAssetName = $('//*[@formcontrolname="deviceName"]');
                const heatSubmit = $("/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-heat-map/div[2]/mat-card/mat-card-content/div/button/span[1]");
                // const heatClose = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
                const heatMap = $('//*[@class="mat-card mat-focus-indicator ml-3 mr-3 card"]');
                const heatBack = $('//*[@mattooltip="Back to Home page"]');
                if(i==1 || i==2){
                    await (await heatDay).click();
                    await util.wait(2000);
                    await (await heatAssetName).setValue("Akash");
                    await util.wait(2000);
                    await (await heatSubmit).click();
                    await util.wait(2000);
                    heatMap.scrollIntoView();
                    await util.wait(8000);
                    heatBack.scrollIntoView();
                    await util.wait(4000);
                    await (await heatBack).click();
                    break;
                }else{
                    break;
                }
                
            }
        });
    }); 
};

module.exports = home();