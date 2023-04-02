const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`the system up time is ${os.uptime()}`)


const MecroOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    free: os.freemem()
}
console.log(MecroOs)