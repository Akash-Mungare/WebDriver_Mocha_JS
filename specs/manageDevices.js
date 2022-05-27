// const Wait = require('./login.spec');
const { waitForServer } = require("selenium-webdriver/http/util")
const util = require('./util');



/*--------Adding Assets in Manage Device Tab-------------- */
function manageAssets() {
    describe('Manage Devices', () => {
        it('Manage Assets', async () => {
            // const addAssetBtn = $("//*[@class='mat-focus-indicator mat-raised-button mat-button-base']")
            // const addAsset = $("//*[@formcontrolname='deviceId']")
            // const Assetsubmit = $("//*[@class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']")
            // const flash = $("//*[@class='mat-simple-snackbar ng-star-inserted']")

            // await (await addAssetBtn).click()
            // await util.wait(2000)

/*======================================================================== */
            /*------Adding single Assets-------*/
            // await (await addAsset).setValue(i)
            // await util.wait(2000)
            // await (await Assetsubmit).click()
            // await util.wait(2000)

/*======================================================================== */

            /*------Adding Multiple Assets-------*/
            // for (let i=100;i<=110;i++){
            //     await (await addAsset).setValue(i)
            //     await util.wait(2000)
            //     await (await Assetsubmit).click()
            //     await util.wait(2000)
            // }



            /*------Asset already exist message checking-------*/
            // await expect(flash).toHaveTextContaining('Asset already exist')

            /*------Asset registered successfully message checking-------*/
            // await expect(flash).toHaveTextContaining('Asset registered successfully')

            // const closeBtn = $("//*[@class='mat-focus-indicator float-right mat-button mat-button-base']")
            // await util.wait(2000)


/*======================================================================== */

            /*------Deleting Assets-------*/

            // const delAssetbtn = $("#mat-tab-content-1-0 > div > app-manage-device > div.mat-elevation-z8 > table > tbody > tr:nth-child(12) > td.mat-cell.cdk-cell.mat-tooltip-trigger.cursor.cdk-column-delete.mat-column-delete.ng-star-inserted")
            /*// delAssetbtn.moveTo({ xOffset:0, yOffset:0 })*/
            // delAssetbtn.scrollIntoView()
            // await (await delAssetbtn).click()
            
            // browser.acceptAlert();
            // driver.switchTo().alert().accept();
            // await util.wait(4000)

/*======================================================================== */

            /*------Edit Assets-------*/
            // await util.wait(4000)
            // const editAsset = $("#mat-tab-content-1-0 > div > app-manage-device > div.mat-elevation-z8 > table > tbody > tr:nth-child(12) > td.mat-cell.cdk-cell.mat-tooltip-trigger.cursor.cdk-column-edit.mat-column-edit.ng-star-inserted")
            // editAsset.scrollIntoView()
            // await (await editAsset).click()
            // await util.wait(4000)
            // const editAssetName = $('//*[@formcontrolname="deviceName"]')
            // // const editAssetId = $('//*[@formcontrolname="deviceId"]')
            // const submitBtn1 = $('//*[@class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]')
            // const flashAsset = $('//*[@class="mat-simple-snackbar ng-star-inserted"]')

            // await (await editAssetName).setValue("Akash")
            // await util.wait(4000)
            // // await (await editAssetId).setValue("1111")
            // // await util.wait(4000)
            // await (await submitBtn1).click()
            // await util.wait(4000)

            // await expect(flashAsset).toHaveTextContaining("userId or deviceName already exists.")
            // await expect(flashAsset).toHaveTextContaining("Asset updated successfully")
            
/*======================================================================== */


            /*------Single Toggle On-------*/
            // const Assettoggle = $('//*[@id="mat-slide-toggle-7"]')
            // await util.wait(4000)
            // Assettoggle.scrollIntoView()
            // await util.wait(4000)
            // await (await Assettoggle).click();
            // browser.acceptAlert();

            /*------Multiple Toggle On-------*/

            const flashToggle = $('//*[@class="mat-simple-snackbar ng-star-inserted"]')

            for(let i=11;i<15;i++){
                const Assettoggle = $(`//html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-manage-asset/mat-tab-group/div/mat-tab-body[1]/div/app-manage-device/div[2]/table/tbody/tr[${i}]/td[4]/span/mat-slide-toggle/label/div`)
                // const isdeleted = $(`//*[@id="mat-slide-toggle-1-input"]/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-manage-asset/mat-tab-group/div/mat-tab-body[1]/div/app-manage-device/div[2]/table/tbody/tr[${i}]/td[4]/span/mat-slide-toggle/label/div/input`)
                // await expect(isdeleted).toHaveValue('aria-checked', { ignoreCase: true })
               
                await util.wait(2000)
                Assettoggle.scrollIntoView()
                // Assettoggle.moveTo();
                await util.wait(2000)
                await (await Assettoggle).click();
                browser.acceptAlert();
                await util.wait(2000) 
            
            }
            await expect(flashToggle).toHaveTextContaining("Device ToggleStatus updated successfully");

        })
    })
}


module.exports = manageAssets;