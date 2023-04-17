const request = require('request');
var animal = 'golden retriever';
request.get({
  url: 'https://api.api-ninjas.com/v1/dogs?name=' + animal,
  headers: {
    'X-Api-Key': 'l2XdV+yenf2+H7VKAlkHDg==sKfFgpsacZZUu0tE'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
