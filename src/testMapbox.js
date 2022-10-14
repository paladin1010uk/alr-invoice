console.log ('//MAPBOX!!')

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
