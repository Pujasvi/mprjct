/**
 * Created by pujasvi on 17/8/16.
 */
const express=require('express');
const app=express();
app.use('/',express.static('./public_html'));
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.listen(1200,function(){
    console.log("server running on port 1200");
})