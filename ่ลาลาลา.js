const express = require('express')
const app = express()
const port = 3000

var path = require('path');
app.get('/', (req, res) => {
    var option ={
        root: path.join(__dirname)
    };
    var fileName = 'index.html';
    res.sendFile(fileName, option, function(err) {
        if(err) {
            next(err);
        }else{
            console.log('sent:', fileName);
        }
    });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
