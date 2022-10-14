const axios = require('axios');
const { XMLParser } = require('fast-xml-parser');

// const request = require('request')
// console.log('Testing ZENFOLIO!!')

const email = 'paul@krisman.net';
const zfUrl = 'https://api.zenfolio.com/api/1.8/zfapi.asmx/AuthenticatePlain?loginName=' + encodeURIComponent(email) + '&password=' + encodeURIComponent('GBjAjiPq?7q#MQYX')


let authToken = null;

// const zfLogin = (callback) => {
//   request({
//     uri: zfUrl,
//     headers: {
//       'User-Agent': 'request',
//     },
//     }, (error, body) => {
//     callback(error, body)
//   })
// }


// zfLogin( (error,data = {}) => {
//   // console.log("ZENFOLIO Status Code: "+ data)
//   // console.log(error)
//   console.log(data);`\
// })

function setToken (token) {
  authToken = token;  
}

function getToken (token) {
  return authToken;
}


function loadGroup (groupId) {

  const needsAuthZfUrl = 'https://api.zenfolio.com/api/1.8/zfapi.asmx/LoadGroup?groupId=' + groupId;

  const body = {
    groupId,
  };


return axios
  .get(needsAuthZfUrl, {
    headers: {
      'X-Zenfolio-Token': getToken(),
    },
  })
  .then(res => {

    const parser = new XMLParser();
    const jObj = parser.parse(res.data);

    if (jObj.Fault) {
      // Catch error
      console.log('Error');
      console.log(jObj.Fault.faultstring);
      return;
    }
    
    console.log(`Success, your token is: ${jObj.string}`);
    
    setToken(jObj.string);
  })
  .catch(error => {
    console.log('error');
  })

}


// Get token from server
// axios
//   .get(zfUrl)
//   .then(res => {

//     const parser = new XMLParser();
//     const jObj = parser.parse(res.data);

//     if (jObj.Fault) {
//       // Catch error
//       console.log('Error');
//       console.log(jObj.Fault.faultstring);
//       return;
//     }
    
//     console.log(`Success, your token is: ${jObj.string}`);
    
//     setToken(jObj.string);
//   })
//   .catch(error => {
//     console.log('error');
//   })