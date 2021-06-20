var express = require("express");
var app = express();
var bodyParser=require("body-parser");

app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.locals.pretty= true;

app.get('/form',function(req,res){
  res.render('form');
});

app.get('/form_receiver',function(req,res){
  var title = req.query.title;
  var description =req.query.description;
  res.send(title+','+description);
})

app.post("/form_receiver",function(req,res){
  var title =req.body.title;
  var description =req.body.description;
  res.send(title+','+description);
})
//Query string에 따라 동작을 달리하려면
app.get('/topic',function(req,res){
  var topics=["javascript is...",
    "Nodejs is...",
    "Express is..."
  ];
  res.send(topics[req.query.id]);
})
//Semantic URL에 따라 동작을 달리하려면
app.get('/semantic/:id',function(req,res){
  var topics=["javascript is...",
    "Nodejs is...",
    "Express is..."
  ];
  res.send(topics[req.params.id]);
})
app.get("/semantic/:id/:mode",function(req,res){
  var topics=["javascript is...",
  "Nodejs is...",
  "Express is..."
  ];
  res.send(topics[req.params.id]+','+req.params.mode);
})
app.get("/template",function(req,res){
  res.render('temp',{time:Date(), title:'Jade'});
})
app.get("/", function (req, res) {
  res.send('Hello home page');
});
app.get("/login", function (req, res) {
  res.send("This is a login page");
});
app.get("/frontend", function (req, res) {
  var time =Date();
  var output = `
  <!doctype html>
  <html>
    <head>
    <title>"Hello Universe"</title>
    <meta charset="utf-8">
    </head>
    <body>
    ${time}
    Hello. this is dynamic file.
    <h1>frontend roadmap</h1>
    <img src="/sample_pic.png">
    </body>
  </html>`
  res.send(output);
});
app.listen(3000, function () {
  console.log("Connected on 3000 port");
});