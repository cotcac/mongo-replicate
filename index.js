const express = require('express');
const app = express();
const mdl = require('./model');

// insert
app.get('/insert',(req, res)=>{
  const article  = new mdl({title:req.query.title});
  article.save((err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("inserted");
    

  })
});

app.get('/', function (req, res) {
  console.log('call home');
  // res.send('hello world 134dff77ffyy');
  mdl.find({},(err,result)=>{
    if(err) throw err;
    res.json(result);
  })
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});