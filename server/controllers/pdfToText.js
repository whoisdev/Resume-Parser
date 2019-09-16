var pdfUtil = require('pdf-to-text');
var pdf_path = "./functionalSample.pdf";

function getParsedText(){
    return new Promise((resolve,reject)=>{
        pdfUtil.pdfToText(pdf_path, (err,data)=>{
            if (err) reject(err)
            resolve(data);
        })
    })
}
module.exports = getParsedText;
