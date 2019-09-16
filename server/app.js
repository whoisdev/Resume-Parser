/**
 * Load node modules for routing, server and parsing
 */
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getParsedFileResult} from './controllers/docParser';

const app = express();

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
 * Set up file uploading destination
 */
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'uploads/')
    },
    filename: function(req, file, callback) {
        const err = !file ? new Error('No file provided.') : null
        callback(err, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage })


/**
 * Upload files to the server.
 */
app.post('/api/upload', upload.single('resume'), function (req, res) {
    return res.json('Successfully uploaded file.', 200)
})

app.get('/api/parse', (req,res)=>{
    let filePath = req.body.resumePath;
    console.log(filePath);
    getParsedFileResult(filePath)
        .then((parsedData)=>{
            res.json(parsedData, 200);
        })
})

/**
 * Everything except API request 
 * triggers the SPA(FRONT-END).
 */
app.get(/.*/,(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})
/**
 * Server Port Defined~
 * TODO: Change this when deploying for production
 */
app.listen(3000, process.env.IP, () =>{
    console.log(`Serving on 3000`);
});
