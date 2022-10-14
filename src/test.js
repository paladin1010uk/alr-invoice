const stripe = require('stripe')('sk_test_clhyYvJVSN54oRZSVhdQwTed00KmJbCHy0');
//const request = require('request')

// stripe.products.create({
//   name: 'Starter Subscription',
//   description: '$12/Month subscription',
// }).then(product => {
//   stripe.prices.create({
//     unit_amount: 1200,
//     currency: 'usd',
//     recurring: {
//       interval: 'month',
//     },
//     product: product.id,
//   }).then(price => {
//     console.log('Success! Here is your starter subscription product id: ' + product.id);
//     console.log('Success! Here is your premium subscription price id: ' + price.id);
//   });
// });

// request ({"https://api.monday.com/v2", json: true}, (error, {body} => {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEwODM2OTg5MywidWlkIjoyMTYxOTg2MSwiaWFkIjoiMjAyMS0wNC0zMFQwODoyNjoxNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODc4OTc0NCwicmduIjoidXNlMSJ9.k9XH-2bVbVBO6y0Jy8hRI2fJ5GzGmC9OemESJVc14mY'
//    },
//    body: JSON.stringify({
//      'query' : '{ boards (limit:1) {id name}} }'
//    })
//   })
//   console.log (res.data)

//   const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGFsYWRpbjEwMTB1ayIsImEiOiJja3ZkcHR4bXk3MWEzMm5zNzM4aGFoN3F6In0.8wgOTU1Usm0Kk10uU5pmQw'

//     request({url, json: true}, (error, {body}) => {
//         if (error) {
//             callback('unable to connect to location services', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search')
//         } else {
//             callback(undefined, {
//                 Latitude: body.features[0].center[1],
//                 Longitude: body.features[0].center[0],
//                 location:  body.features[0].place_name
//             })
//         }   
//     })
// }


//MONDAY.COM !!!

const { GraphQLClient } = require('graphql-request')

//Create connection called 'client' that connects to Monday.com's API
const client = new GraphQLClient('https://api.monday.com/v2/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEwODM2OTg5MywidWlkIjoyMTYxOTg2MSwiaWFkIjoiMjAyMS0wNC0zMFQwODoyNjoxNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODc4OTc0NCwicmduIjoidXNlMSJ9.k9XH-2bVbVBO6y0Jy8hRI2fJ5GzGmC9OemESJVc14mY'
    }
})

//Create query to send to Monday.com's API
const query = ` query {boards {id, name} }`;

client.request(query).then((data) => console.log(JSON.stringify(data)))



//MAPBOX!!
const request = require('request')

const loc = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicGFsYWRpbjEwMTB1ayIsImEiOiJja3ZkcHR4bXk3MWEzMm5zNzM4aGFoN3F6In0.8wgOTU1Usm0Kk10uU5pmQw'
    request({url, json: true}, (error, {body}) => {
      callback(undefined, JSON.stringify(body.features[0]))
    })
  }

loc('Radlett', (error,data = {}) => {
  console.log(data)
})


//ZENFOLIO!!
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




  // const geocode = (address, callback) => {
//   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGFsYWRpbjEwMTB1ayIsImEiOiJja3ZkcHR4bXk3MWEzMm5zNzM4aGFoN3F6In0.8wgOTU1Usm0Kk10uU5pmQw'

//   request({url, json: true}, (error, {body}) => {
//       if (error) {
//           callback('unable to connect to location services', undefined)
//       } else if (body.features.length === 0) {
//           callback('Unable to find location. Try another search')
//       } else {
//           callback(undefined, {
//               Latitude: body.features[0].center[1],
//               Longitude: body.features[0].center[0],
//               location:  body.features[0].place_name
//           })
//       }   
//   })
// }


// const { mondayRequest, GraphQLClient } = require('graphql-request')

// //Create connection called 'client' that connects to Monday.com's API
// const client = new GraphQLClient('https://api.monday.com/v2/', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEwODM2OTg5MywidWlkIjoyMTYxOTg2MSwiaWFkIjoiMjAyMS0wNC0zMFQwODoyNjoxNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODc4OTc0NCwicmduIjoidXNlMSJ9.k9XH-2bVbVBO6y0Jy8hRI2fJ5GzGmC9OemESJVc14mY'
//     }
// })

// //Create query to send to Monday.com's API
// const query = ` query {boards {id, name} }`;

// client.request(query).then((data) => console.log(JSON.stringify(data)))

