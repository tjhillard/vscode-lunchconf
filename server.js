'use strict';

const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public/'));

let port = 3333;
app.listen(port || process.env.PORT, () => console.log(`Server running on ${ port }`));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

const sports = [
    'baseball',
    'baseketball',
    'curling',
    'volleyball',
    'softball',
    'football'
];

// 1. BREAKPOINTS
app.get('/api/sports', (req, res) => {

    // sports.push('potato');

    if (sports.includes('potato'))
    {
        return res.json({
            error: true,
            message: 'Potato is NOT a sport'
        });
    }

    res.json({
        data: sports
    });

});

// 2. Debug Console
app.get('/api/users', (req, res) => {
    let users = [
        { id: 1, name: 'Jonathan Dough' },
        { id: 2, name: 'Ddave Coulier' },
        { id: 3, name: 'Cardi B' }
    ];

    console.log(users);

    return res.json(users);
});

app.listen();




// 3. IntelliSense
// ctrl + space
// peek def
// go to def
// app.listen()