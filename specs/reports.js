// const Wait = require('./login.spec');
const { waitForServer } = require("selenium-webdriver/http/util");
const { wait } = require("./util");
const util = require('./util');

function reports() {
    describe('Reports Section', () => (
        it('Report', async () =>{

            const generic = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[5]/div')
            await(await generic).click()
            await util.wait(2000)

            /* ==================Generic Report====================== */   
            // const todayGRBtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/div/mat-radio-group/mat-radio-button[1]/label/span[1]/span[2]')
            const lastweekGRBtn =$('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/div/mat-radio-group/mat-radio-button[2]/label/span[1]/span[2]')
            const genericDroopdown = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/mat-form-field[1]/div/div[1]/div/mat-select/div/div[1]/span')
            const dropdownGR= $('//*[@value="1"]')
            const submitGRcbtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/button')
            // const closeGRbtn = $('//html/body/div[2]/div[2]/div/mat-dialog-container/app-asset-report/button/span[1]/mat-icon')
            
            
            // await (await todayGRBtn).click()
            // await util.wait(2000);
            await (await lastweekGRBtn).click()
            await util.wait(2000);
            await (await genericDroopdown).click()
            await util.wait(2000);
            await (await dropdownGR).click()
            await util.wait(2000);
            await (await submitGRcbtn).click()
            await util.wait(4000);

            const downloadGRbtn = $('/html/body/div[2]/div[2]/div/mat-dialog-container/app-asset-report/div[1]/div[2]/span/button')
            const cancelGRbtn = $('//html/body/div[2]/div[2]/div/mat-dialog-container/app-asset-report/button')
            

            await (await downloadGRbtn).click()
            await util.wait(6000);
            await (await cancelGRbtn).click()
            await util.wait(6000);

        })
    ))
    
}

module.exports = reports