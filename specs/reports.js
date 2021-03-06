// const Wait = require('./login.spec');
const { waitForServer } = require("selenium-webdriver/http/util");
const { wait } = require("./util");
const util = require('./util');

function reports() {
    describe('Reports Section', () => {
        it('Report', async () =>{

            const generic = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[5]/div')
            await(await generic).click()
            await util.wait(2000)

            /* ==================Generic Report====================== */   
            // const todayGRBtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/div/mat-radio-group/mat-radio-button[1]/label/span[1]/span[2]')
            const lastweekGRBtn =$('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/div/mat-radio-group/mat-radio-button[2]/label/span[1]/span[2]')
            const genericDroopdown = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/form/mat-form-field[1]/div/div[1]/div/mat-select/div/div[1]/span')
            await (await lastweekGRBtn).click()
            await util.wait(2000);
            await (await genericDroopdown).click()
            await util.wait(2000);            
            const x = Math.floor(Math.random() * 4) +1

            for(let i = x;i<=4 ; i++){

                const dropdownGR= $(`//*[@value="${i}"]`)
                const attrGr =  await dropdownGR.getAttribute('value')
                const assetNameGR = $('//*[@formcontrolname="deviceName"]')
                const submitGRcbtn = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-report/div/mat-card[1]/mat-card-content/button')
                console.log("========================================attr:",attrGr);


                if (attrGr == "1" || attrGr == "4") {
                    await (await dropdownGR).click()
                    await util.wait(2000);                
                    await (await submitGRcbtn).click()
                    await util.wait(4000);
                } else {
                    await (await dropdownGR).click()
                    await util.wait(2000);
                    await (await assetNameGR).setValue("Prod 1");
                    const suggestionGR = $('//*[@class="mat-option-text"]')
                    await (await suggestionGR).click();
                    await util.wait(2000);
                    await (await submitGRcbtn).click()
                    
                }

                await util.wait(4000);
                const downloadGRbtn = $('/html/body/div[2]/div[2]/div/mat-dialog-container/app-asset-report/div[1]/div[2]/span/button')
            
                const cancelGRbtn = $('//html/body/div[2]/div[2]/div/mat-dialog-container/app-asset-report/button')
                console.log("=======================Download Button========================",await downloadGRbtn.$$('span')[0].$('span').getText())

                await (await downloadGRbtn).click()
                await util.wait(6000);
                await (await cancelGRbtn).click()
                await util.wait(6000);
                break;

            }
            
            
            
            // const closeGRbtn = $('//html/body/div[2]/div[2]/div/mat-dialog-container/app-asset-report/button/span[1]/mat-icon')
            
            // await (await todayGRBtn).click()
            // await util.wait(2000);
            
            
                
            
            // await (await dropdownGR2).click()
            // await util.wait(2000);
            // await (await dropdownGR3).click()
            // await util.wait(2000);
            // await (await dropdownGR4).click()
            // await util.wait(2000);
            

            

        });

        // it('Location wise Report',async ( )=> {

            // const     
    }
)};

module.exports = reports