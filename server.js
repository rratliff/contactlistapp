var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res){

    person1 = {
        name: 'tim',
        email: 'tim@example.com',
        number: '111-111-1111'
    };
    person2 = {
        name: 'bobby',
        email: 'bobby@example.com',
        number: '222-222-2222'
    };
    person3 = {
        name: 'stacy',
        email: 'stacy@example.com',
        number: '333-333-3333'
    };
    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000);
console.log('The server is running on port 3000');
