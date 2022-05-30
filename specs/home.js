const { waitForServer } = require("selenium-webdriver/http/util")
const util = require('./util');

function home(){
    describe ('Home', () => {
        it('Home Page',async() => {
            const homebtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[1]/div');
            await (await homebtn).click();
            await util.wait(4000);
        });

        
        /*======================Path Tracing=========================*/

        // it('Path Tracking', async () => {
            
        //     const pathBtn = $('//*[@mattooltip="Click here for path tracing data"]');
        //     await (await pathBtn).click();
        //     await util.wait(2000);

        //     const pathToday = $('//*[@class="mat-radio-inner-circle"]');
        //     const pathAsset = $('//*[@formcontrolname="deviceName"]');
        //     // const pathsuggestion = $('//*[@class="mat-option-text"]');
        //     const pathSubmit = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
        //     const pathMap = $('//*[@class="mat-card mat-focus-indicator ml-3 mr-3 card"]');

        //     await (await pathToday).click();
        //     await util.wait(2000);
        //     await (await pathAsset).setValue("Akash");
        //     // await util.wait(2000);
        //     // await (await pathsuggestion).click();
        //     // await util.wait(2000);
        //     await (await pathSubmit).click();
        //     await util.wait(2000);
        //     pathMap.scrollIntoView()
        //     await util.wait(2000);

        //     const pathBackBtn = $('//*[@mattooltip="Back to Home page"]');
        //     pathBackBtn.scrollIntoView();
        //     await util.wait(4000);
        //     await (await pathBackBtn).click();
        //     await util.wait(2000);

        // });

        /*======================Heat Map=========================*/

        // it('Heat Map', async () => {
        //     const heatBtn = $('//*[@mattooltip="Click here for heat map data"]');
        //     await (await heatBtn).click();
        //     await util.wait(4000);
        //     let x = Math.floor(Math.random() * 2) + 1;
        //     for (let i=x; i<=2; i++)
        //     {
        //         console.log("=============================== i =", i);
        //         const heatDay = $(`//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-heat-map/div[2]/mat-card/mat-card-content/form/div/mat-radio-group/mat-radio-button[${i}]/label/span[1]`);
        //         const heatAssetName = $('//*[@formcontrolname="deviceName"]');
        //         const heatSubmit = $("//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-heat-map/div[2]/mat-card/mat-card-content/div/button/span[1]");
        //         // const heatClose = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
        //         const heatMap = $('//*[@class="mat-card mat-focus-indicator ml-3 mr-3 card"]');
        //         const heatBack = $('//*[@mattooltip="Back to Home page"]');
        //         if(i==1 || i==2){
        //             await (await heatDay).click();
        //             await util.wait(2000);
        //             await (await heatAssetName).setValue("Akash");
        //             await util.wait(2000);
        //             await (await heatSubmit).click();
        //             await util.wait(2000);
        //             heatMap.scrollIntoView();
        //             await util.wait(8000);
        //             heatBack.scrollIntoView();
        //             await util.wait(4000);
        //             await (await heatBack).click();
        //             break;
        //         }else{
        //             break;
        //         }
                
        //     }
        // });

        /*======================Congestion=========================*/

        it('Congestion',async() => {
            const congestionBtn = $('//*[@routerlink="/congestion"]');
            await (await congestionBtn).click();
            await util.wait(4000);
            
            const congestionDay = $('//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-congestion/div[2]/div[1]/mat-card[1]/mat-card-content/form/div/mat-radio-group/mat-radio-button/label/span[1]/span[2]');
            const congestionFromTime = $('//*[@placeholder="From time"]');
            const congestionToTime = $('//*[@placeholder="To time"]');
            const congestionDsubmit = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]')
            
            
            const congestionMap = $('//*[@id="map"]');
            const congestionChart = $('//*[@class="canvasjs-chart-canvas"]')
            const congestionBack = $('//*[@mattooltip="Back to Home page"]')
            let y = Math.floor(Math.random() * 2) + 1;

            if (y == 1 ){

                /*==============Congestion Report==============*/
                console.log("==============Congestion Report==============");
                await (await congestionDay).click();
                await util.wait(2000);
                await (await congestionFromTime).setValue(0000);
                await util.wait(2000);
                await (await congestionToTime).setValue(2359);
                await util.wait(2000);
                await (await congestionDsubmit).click();
                await util.wait(2000);
                await (await congestionMap).scrollIntoView();
                await util.wait(8000);
                await (await congestionBack).scrollIntoView();
                await util.wait(4000);
                await (await congestionBack).click();

            }else if(i == 2){
                /*==============Congestion per day Report==============*/
                console.log("==============Congestion per day Report==============");
                const congestionPerDayT = $(`//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-congestion/div[2]/div[1]/mat-card[2]/mat-card-content/form/div/mat-radio-group/mat-radio-button[${i}]/label/span[1]/span[2]`);
                const congestionPDSubmit = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
                let z = Math.floor(Math.random() * 2) + 1;
                
                if(z == 1){
                    console.log("==============Congestion per day (Today)==============");
                    
                    const congestionPD = $(`//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-congestion/div[2]/div[1]/mat-card[2]/mat-card-content/form/mat-radio-group/mat-radio-button[1]/label/span[1]/span[1]`);
                    let u = Math.floor(Math.random() * 2) + 1;
                    if(u == 1){

                    }else if (u == 2) {
                        
                    }else{;};
                }
            }else{;};
        });
    });     

};

module.exports = home();