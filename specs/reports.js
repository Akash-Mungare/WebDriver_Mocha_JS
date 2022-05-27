// const Wait = require('./login.spec');
const { waitForServer } = require("selenium-webdriver/http/util");
const { wait } = require("./util");
const util = require('./util');

function reports() {
    describe('Reports Section', () => (
        it('Report', async () =>{

            const generic = $('//html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[5]/div')
            await(await generic).click()
            await util.wait(2000)

        })
    ))
    
}

module.exports = report