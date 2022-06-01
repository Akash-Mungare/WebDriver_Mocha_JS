// const Wait = require('./login.spec');
const { waitForServer } = require("selenium-webdriver/http/util");
const { wait } = require("./util");
const util = require('./util');

function timeTracker() {
    describe('Time Tracker', () => {
        it('Time lapse',async () => {
            const timeLapseBtn = $('//html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[8]/div/mat-icon')
            await (await timeLapseBtn).click()
            await util.wait(4000);
            const timeLapseDD = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-time-tracker/div/mat-tab-group/div/mat-tab-body[1]/div/app-time-lapse/div[1]/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span[1]/mat-panel-title')
            await (await timeLapseDD).click();
            await util.wait(4000);
            const assetNameTL = $('//*[@formcontrolname="deviceId"]');
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
                }
            }

        });
    });
}

module.exports = timeTracker;