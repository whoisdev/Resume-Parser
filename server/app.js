/**
 * Load node modules for routing, server and parsing
 */
import express from 'express';
const app = express();
const bodyParser  = require('body-parser');
const cors = require('cors');

/**
 * Set body-parser and body structure
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Set static paths for public (css,js)
 * and uploads (img)
 */
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/uploads/'));

app.use(cors());


/**
 * Everything except API request 
 * triggers the SPA(FRONT-END).
 */
app.get(/.*/,(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

/**
 * Upload files to the server.
 */
app.post('/api/upload', function (req, res) {
    return res.json('Hello world')
})

/**
 * Server Port Defined~
 * TODO: Change this when deploying for production
 */
app.listen(3000, process.env.IP, () =>{
    console.log(`Serving on 3000`);
});