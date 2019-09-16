var pdfUtil = require('pdf-to-text');

function getParsedText(filePath){
    filePath = `uploads/${filePath}`
    return new Promise((resolve,reject)=>{
        pdfUtil.pdfToText(filePath, (err,data)=>{
            if (err) reject(err)
            resolve(data);
        })
    })
}
module.exports = getParsedText;
