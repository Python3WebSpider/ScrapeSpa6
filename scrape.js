const CryptoJS = require('crypto-js')

function encrypt(...args) {
  let time = Math.round(new Date().getTime() / 1000).toString()
  args.push(time)
  let sign = CryptoJS.SHA1(args.join(',')).toString(CryptoJS.enc.Hex)
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse([sign, time].join(',')))
}

let token = encrypt(process.argv[2])
console.log(token)