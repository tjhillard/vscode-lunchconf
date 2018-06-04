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

app.get('/api/sports', (req, res) => {

    const sports = [
        'baseball',
        'baseketball',
        'curling',
        'volleyball',
        'softball',
        'football'
    ];

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