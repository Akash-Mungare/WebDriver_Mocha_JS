const { waitForServer } = require("selenium-webdriver/http/util");
const { wait } = require("./util");
const util = require('./util');


function manageCoins(){
    describe('Manage devices', ()=> {
        it('Manage Coins', async () => {
            const coins = $('//*[@id="mat-tab-label-1-1"]/div/button')
            await (await coins).click()
            await wait(2000);

        })
    })
}


module.exports = manageCoins;