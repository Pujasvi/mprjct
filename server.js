/**
 * Created by pujasvi on 17/8/16.
 */
const express=require('express');
const app=express();
app.use('/',express.static('./public_html'));
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.listen(1700,function(){
    console.log("server running on port 1700");
})


app.post('/create',function(req,res) {
    console.log("post " + req.body.name + ' ' + req.body.age);
    var newTodo = {
        name: req.body.name,
        age: req.body.age,

    };
    console.log("index test  " + newTodo.name + newTodo.age);
    /*db.addTodo(newTodo, function (result) {
        res.send(result);

    })*/
})