/**
 * Created by pujasvi on 9/8/16.
 */
$(function () {

   var count=1;


    function chng_img(){
        console.log("chng imge called");
        var image_id=$("#back_image");
        image_id.css('background-image','url(./pics/pic4.jpg)');
        image_id.css("background-size","100% 120%");

    }
    function chng_img2(){
        console.log("chng imge called");
        var image_id=$("#back_image");
        image_id.css('background-image','url(./pics/pic3.jpg)');
        image_id.css("background-size","100% 120%");

    }


    setTimeout(chng_img,3000);
    setTimeout(chng_img2,6000)



});
sub =function(){
    console.log("clicked");
    user=$('#user-name').val();
}
