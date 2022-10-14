const request = require('request')

console.log('Testing ZENFOLIO!!')


const zfUrl = 'https://api.zenfolio.com/api/1.8/zfapi.asmx/AuthenticatePlain?loginName=' + encodeURIComponent('paul@krisman.net') + '&password=' + encodeURIComponent('GBjAjiPq?7q#MQYX')

const zfLogin = (callback) => {
  request({uri: zfUrl}, (error, body) => {
    callback(error, JSON.stringify(body))
  })
}


zfLogin( (error,data = {}) => {
  console.log("ZENFOLIO Status Code: "+ data)
  console.log(error)
})
