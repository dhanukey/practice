const request =require('request')

request('https://open.mapquestapi.com/geocoding/v1/address?key=94ADxVIe8uiGCqghI2ss5537Px2DgYCH&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500', function(error, response, body){
    // console.log(JSON.parse(body))
    // console.log(response)

    var loc = JSON.parse(body);
  var lat= loc.results[0].locations[0].latLng.lat;
    var lng= loc.results[0].locations[0].latLng.lng;


})