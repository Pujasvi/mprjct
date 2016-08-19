/**
 * Created by pujasvi on 9/8/16.
 */
$(function () {

   var count=1;


    function chng_img(){
        console.log("chng imge called");
        var image_id=$("#back_image");
        image_id.css('background-image','url(pic4.jpg)');
        image_id.css("background-size","100% 120%");

    }
    function chng_img2(){
        console.log("chng imge called");
        var image_id=$("#back_image");
        image_id.css('background-image','url(pic3.jpg)');
        image_id.css("background-size","100% 120%");

    }


    setTimeout(chng_img,3000);
    setTimeout(chng_img2,6000)



});
//signup values;

sinup=function(cb) {
    console.log("clicked sign up");
    var name = $('#name').val();
    var phne = $('#phn').val();
    var eid = $('#id').val();
    var pd1 = $('#pd1').val();
    var pd2 = $('#pd2').val();


//$('#chk').HTML='<b>'+"password not match"+'<b>';

    var info = $('#inf').val();
    //console.log("info is "+name+phne+eid+age+info);

    console.log("clicked signup");
    user = $('#name').val();
    console.log("signup m value " + user);


    $.post('/sign', {

            name: name,
            phone_number: phne,
            Email_id: eid,
            pd1: pd1,
            details: info,
        },
        function (data, status) {

            console.log("status" + status);
        });
    if (pd1 != pd2) {
        cb("0");
    }
    else {
        cb("1");
    }
}

create =function(){
    var uname= $('#urname').val();
    var phone= $('#no').val();
    var eeid= $('#eid').val();
    var ename= $('#ename').val();
    var rel=$('#rel').val();
    var com= $('#com').val();
    var conf= $('#conf').val();
    var comp= $('#comp').val();
    var othr= $('#othr').val();
    var othr2= $('#othr2').val();
    var ag= $('#ag').val();
    var ppl= $('#ppl').val();
    var txt= $('#txt').val();
   // console.log(" create value is"+ uname +''+phone+eeid+ename+rel+com+conf+comp+othr+othr2+ag+ppl+txt);

    $.post('/create', {

        name:uname,
       phone:phne,
        eeid:eeid,
        ename:ename,


    }, function (data, status) {

        console.log("status" +status);
    });

}


//login values;
sub =function(){
    console.log("clicked sub");
    user=$('#user-name').val();
    pswrd=$('#pswrd').val();
    console.log("sub m value "+user +pswrd);
    $.post('/login', {

        name:user,
        pswrd:pswrd
    }, function (data, status) {

        console.log("status" +status);
    });
}

/*
check =function(){
    pd1=$('#pd1').val();
    pd2=$('#pd2').val();
    id(pd1!=pd2){
        console.log("not match")
    }
}*/