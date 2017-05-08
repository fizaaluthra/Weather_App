
const request = require('request');
var geocodeAddress = function(address){
var encodedAddress = encodeURIComponent(address);

request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if (error){
		console.log('Unable to connect to server');

	}
	else if (body.status === "ZERO_RESULTS"){
		console.log('Unable to find address');
	}
	else{
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Address: ${body.results[0].geometry.location.lat}`);
		console.log(`Address: ${body.results[0].geometry.location.lng}`);
	}
});
}

module.exports.geocodeAddress = geocodeAddress;