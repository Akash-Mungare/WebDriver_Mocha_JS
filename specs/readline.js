const readline = require('readline');
const shell = require('shelljs');

function start() {
    return new Promise(async (resolve, reject) => {
        const readL = readline.createInterface(process.stdin, process.stdout);
        console.log("List of Server to be tested:");
        console.log("1. MSIL\n2. NewAT\n3. NewPT\n");

        readL.question("Select the option to be execute :", async (number) => {
            console.log("number==", number);
            if (number == 1) {
                console.log("==============MSIL============");
            } else if (number == 2) {
                console.log("==============NewAT============");
                await shell.exec('npm test -- --spec ./test/specs/login.spec.js')
                resolve('--------------successfully executed--------------------');
                // manageAssets();
            } else {
                console.log("==============NewPT============");
            }

        });
    })
}

start().then(res => console.log('res==', res)).catch(err => console.log("err==", err))
