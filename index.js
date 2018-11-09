const express = require('express');
const bodyParser = require('body-parser');
const port = 2000;

// fire express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({message: "welcome to the API"}));

app.listen(port, () => console.log(`listening on ${port}`));