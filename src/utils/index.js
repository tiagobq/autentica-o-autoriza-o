const { pbkdf2Sync, timingSafeEqual } = require('crypto')

const wait : (time: any) => Promise<any> = (time : any) : Promise<any> =>
new Promise(executor: resolve : (value : any) => void =>
setTimeout(handler: resolve, timeout:time)
) 

const encryp: (data: any) => Promise<any> = async (data : any) : Promise<any> => pbkdf2Sync
(data, salt, iterations, keyLenght, digest).toString('hex')

module.exports = {
wait,
encrypt
}
