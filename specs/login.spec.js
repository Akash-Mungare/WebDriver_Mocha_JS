const { Browser } = require("selenium-webdriver");
const util = require('./util');

function process() {
    describe('Login Test', () => {
        it('Login Page', async () => {
            browser.maximizeWindow()
            await browser.url("https://nat-test.sensegiz.com/login");
            expect(await browser.getTitle()).toEqual('Asset Tracking');
            const user = $("#mat-input-0")
            const password = $("#mat-input-1")
            const submitBtn = $("//html/body/app-root/div[2]/app-login/div/form/button")

            await (await user).setValue('akashmungare112@gmail.com')
            // console.log("===========================userName: ",user)
            // await util.wait(2000);
            await (await password).setValue('Akash@123')
            // console.log("==========================password: ",password)
            // await util.wait(2000);
            await (await submitBtn).click()
            // await util.wait(2000);

            // const manageDevices = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[2]/div/div[2]')
            // await (await manageDevices).click()
            await util.wait(5000);

        })
    })
}


module.exports = process;
// module.exports = wait;