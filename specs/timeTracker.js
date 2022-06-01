// const Wait = require('./login.spec');
const { waitForServer } = require("selenium-webdriver/http/util");
const { wait } = require("./util");
const util = require('./util');

function timeTracker() {
    describe('Time Tracker', () => {

        /*========================= Time Lapse =========================*/
        it('Time lapse',async () => {
            const timeLapseBtn = $('//html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[8]/div/mat-icon')
            await (await timeLapseBtn).click()
            await util.wait(4000);
            const timeLapseDD = $('//mat-expansion-panel-header[@role="button"]')
            await (await timeLapseDD).click();
            await util.wait(4000);
            const assetNameTL = $('//mat-select[@formcontrolname="deviceId"]');
            const assetNameSelectTL = $('//html/body/div[3]/div[2]/div/div/div/mat-option[5]')
            const clickTL = $('//*[@class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]');
            const startZoneTL = $('//*[@formcontrolname="startZone"]');
            const startZoneSelectTL = $('//html/body/div[3]/div[2]/div/div/div/mat-option[3]');
            const endZoneTL = $('//*[@formcontrolname="endZone"]');
            const endZoneSelectTL = $('//html/body/div[3]/div[2]/div/div/div/mat-option[1]');
            const timeTL = $('//*[@type="number"]');
            const submitTL = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]')
            const resetTL = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary ng-star-inserted"]');

            for(let a=1; a<=2; a++){
                console.log("==================================a: ",a)
                if(a == 1){
                    await (await assetNameTL).click();
                    await util.wait(4000);
                    await (await assetNameSelectTL).click();
                    await util.wait(4000);
                    await (await clickTL).click();
                    await (await startZoneTL).click();
                    await util.wait(4000);
                    await (await startZoneSelectTL).click();
                    await (await endZoneTL).click();
                    await util.wait(4000);
                    await (await endZoneSelectTL).click();
                    await (await timeTL).setValue("150");
                    await (await submitTL).click();
                    await util.wait(8000);
                }else{
                    console.log("===========================Else 2=========================",a)
                    await (await timeLapseDD).click();
                    await util.wait(2000);
                    await (await assetNameTL).click();
                    await util.wait(4000);
                    await (await assetNameSelectTL).click();
                    await util.wait(4000);
                    await (await clickTL).click();
                    await (await startZoneTL).click();
                    await util.wait(4000);
                    await (await startZoneSelectTL).click();
                    await (await endZoneTL).click();
                    await util.wait(4000);
                    await (await endZoneSelectTL).click();
                    await (await timeTL).setValue("150");
                    await (await resetTL).click();
                    await util.wait(8000);
                }
            }

        });

        /*========================= Time Lapse =========================*/
        it('Turn Around', async () => {
            const turnAround = $('//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-time-tracker/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div/button');
            await (await turnAround).click();
            await util.wait(4000);
            const turnAroundBtn = $('//mat-expansion-panel-header[@role="button"]')
            await (await turnAroundBtn).click();
            await util.wait(4000);
        });
    });
}

module.exports = timeTracker;