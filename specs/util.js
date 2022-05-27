class util {
    static async wait(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time)

        })
    }
}

module.exports = util;