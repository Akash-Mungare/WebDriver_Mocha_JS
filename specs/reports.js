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
            const todayRadioBtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/div/mat-radio-group/mat-radio-button[1]/label/span[1]/span[2]')
            const genericDroopdown = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/mat-form-field[1]/div/div[1]/div/mat-select/div/div[1]/span')
            const dropdown= $('//*[@value="1"]')
            const genericbtnsubmit = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/button')
            
            
            await (await todayRadioBtn).click()
            await util.wait(2000);
            await (await genericDroopdown).click()
            await util.wait(2000);
            await (await dropdown).click()
            console.log("====================== element name: ",dropdown.getText());
            await util.wait(2000);
            await (await genericbtnsubmit).click()
            await util.wait(6000);

        })
    ))
    
}

module.exports = reports