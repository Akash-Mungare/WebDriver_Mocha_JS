const { Browser } = require("selenium-webdriver");
const util = require('./util');

function geofenceDashboard() {
    describe('Geofence Dashboard', () =>{
        it('Geofence Dashboard', async () =>{
            const geofenceData = $("//html/body/app-root/div/mat-sidenav-container/mat-sidenav/div/mat-list/mat-list-item[3]/div");
            const searchGD = $('//*[@data-placeholder="Search"]');
            const selectGD = $('/html/body/app-root/div/mat-sidenav-container/mat-sidenav-content/div/app-geofence-dashboard/div/div[2]/table/tbody/tr[1]/td[3]')
            const cancelGD = $('//html/body/div[2]/div[2]/div/mat-dialog-container/app-grouping/button/span[1]/mat-icon');

            await (await geofenceData).click();
            await util.wait(2000);
            await (await searchGD).setValue('Akash');
            await util.wait(2000);
            await (await selectGD).click();
            await util.wait(4000);
            await (await cancelGD).click();
            await util.wait(4000);
        })
    })
}

module.exports=geofenceDashboard();