/**
 * Created by pujasvi on 17/8/16.
 */
const express=require('express');
const app=express();
app.use('/',express.static('./public_html'));
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const md5=require('md5');

app.listen(1900,function(){
    console.log("server running on port 1900");
})


app.post('/login',function(req,res) {
    console.log("post " + req.body.name + ' ' + req.body.pswrd);
    var newTodo = {
        name: req.body.name,
        pswrd: req.body.pswrd,
        hash:md5('pswrd')

    };
    console.log("index test  " + newTodo.name + newTodo.hash);
    /*db.addTodo(newTodo, function (result) {
        res.send(result);

    })*/
})
app.post('/sign',function(req,res) {
    console.log("post " + req.body.name + ' ' + req.body.phone_number  +' ' + req.body.Email_id +' '  +req.body.pd1);
    var entering = {
        name: req.body.name,

        phone: req.body.phone_number,
        pd1:req.body.pd1,
        hash:md5('pd1'),
        mail:req.body.Email_id,


    };
console.log("paswrd in sign up is"+entering.hash);
})

app.post('/create',function(req,res) {
    console.log("post " + req.body.name + ' ' + req.body.phone+ req.body.eeid+ req.body.ename);
    var newTodo = {
        name: req.body.name,
        age: req.body.age,

    };
    console.log("index test  " + newTodo.name + newTodo.age);
    /*db.addTodo(newTodo, function (result) {
     res.send(result);

     })*/
})