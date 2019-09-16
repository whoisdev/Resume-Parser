var vfile = require("to-vfile");
var retext = require("retext");
var pos = require("retext-pos");
var keywords = require("retext-keywords");
var toString = require("nlcst-to-string");
let getParsedText = require("./pdfToText.js");

let getParsedFileResult = function(filePath){
  return new Promise((resolve, reject)=>{
    getParsedText(filePath).then(data => {
      try {
        let matchedKeyword = [];
        let  matchedkeyphrases = [];
        retext()
          .use(pos) // Make sure to use `retext-pos` before `retext-keywords`.
          .use(keywords)
          .process(data, done);
    
        function done(err, file) {
          if (err) throw err;
          file.data.keywords.forEach(function(keyword) {
            matchedKeyword.push(toString(keyword.matches[0].node))
          });
    
          file.data.keyphrases.forEach(function(phrase) {
            matchedkeyphrases.push(phrase.matches[0].nodes.map(stringify).join(""))
            function stringify(value) {
              return toString(value);
            }
          });
        }
        resolve({'keyword' :matchedKeyword, 'keyphrases': matchedkeyphrases})
      } catch (err) {
          reject(err);
      }
    });
  })
}

export {getParsedFileResult};