$("document").ready(function(){
    var clicked = false;
    var myname = "asdfghj";
    var maxLength = 140;
    var currentdate = new Date(); 
    var hours = currentdate.getHours();
    var timey = "";
    var month = "";

    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    if(currentdate.getHours() > 12){
        var timey = "PM";
    }
    else{
        timey = "AM";
    }
    if((currentdate.getHours()) > 12){
        hours -= 12;
    }
    switch((currentdate.getMonth()+1)){
        case 1:
        month = "January";
        break;
        case 2:
        month = "February";
        break;
        case 3:
        month = "March";
        break;
        case 4:
        month = "April";
        break;
        case 5:
        month = "May";
        break;
        case 6:
        month = "June";
        break;
        case 7:
        month = "July";
        break;
        case 8:
        month = "August";
        break;
        case 9:
        month = "September";
        break;
        case 10:
        month = "October";
        break;
        case 11:
        month = "November";
        break;
        case 12:
        month = "December";
        break;
    }
    var datetime2 = hours + ":"
                + currentdate.getMinutes()  + " " +timey 
                + " - "
                + currentdate.getDate() + " "  
                + month + " "  
                + (currentdate.getFullYear() - 2000);          

    $("#dummyname").prepend(myname);

    $("#char-count").toggle("hide");
    $("#tweet-submit").toggle("hide");

$(".tweet-compose").click(function(){
    $(this).stop(true, false).animate({
        
        height: clicked ? 33 : 66}, "fast");

    $("#char-count").toggle("hide");
    $("#tweet-submit").toggle("hide");

    clicked = !clicked;



});

$(".tweet-compose").keyup(function(){
    var length = $(this).val().length;
    var remaining = maxLength - length;

    if(remaining <= 10){
        $("#char-count").css("color", "red");
        $("#char-count").html(remaining);
        $('#tweet-submit').on('click',function() {
            $(this).prop("disabled",false);
        });
    }
    else if(remaining > 10){
    $("#char-count").html(remaining);
    $('#tweet-submit').on('click',function() {
        $(this).prop("disabled",false);
    });
    }
    else if(remaining < 0){
        $('#tweet-submit').on('click',function() {
            $(this).prop("disabled",true);
        });
    }

});






/* <div class="tweet">
    <div class="content">
        <img class = "avatar" src="img/alagoon.jpg"/>
        <strong class="fullname"></strong>
        <span class="username"></span>
        <p class="tweet-text"></p>
        
    </div>
</div> */



$("#tweet-submit").click(function(){

    var newTweet = $(".tweet-compose").val();

    var $myTweet = document.createElement("p");

    myTweet = document.getElementById("thetweet");

    $("#thetweet").html(newTweet);



    // $("#stream").prepend('<div class="tweet"><div class="content"><img class = "avatar" src="img/alagoon.jpg"/><strong class="fullname" id="myfullname"></strong><span class="username" id="myusername"></span><p class="tweet-text" id="thetweet"></p></div></div> ');

    $("#stream").prepend('<div class="tweet" id="mytweet"><div class="content"><img class="avatar" src="img/alagoon.jpg"/><strong class="fullname" id="myfullname"></strong><span class="username" id="myusername"></span><p class="tweet-text" id="mytweettext"></p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats" id="mystats"><div class="retweets"><p class="num-retweets">0</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">0</p><p>FAVORITES</p></div>');    
    

    $("#myfullname").prepend(myname);
    $("#myusername").prepend("  @"+ myname);
    $("#mytweettext").prepend(newTweet);
    $("#thetime").prepend(datetime2);

    
    $("#mystats").toggle("hide");
    $("#myfavs").toggle("hide");
    $("#myint").toggle("hide");
    $("#myreply").toggle("hide");

    // $(".stats").toggle("hide");
    // $(".favorites").toggle("hide");
    // $(".users-interact").toggle("hide");
    // $(".reply").toggle("hide");

    $(".tweet").click(function(){
        $(".stats").toggle("show");
        $(".favorites").toggle("show");
        $(".users-interact").toggle("show");
        $(".reply").toggle("show");
        
    });
    

// $("#mytweet").click(function(){
//     $("#mystats").toggle("show");
//     $("#myfavs").toggle("show");
//     $("#myint").toggle("show");
//     $("#myreply").toggle("show");
    
// });
});



$(".stats").toggle("hide");
$(".favorites").toggle("hide");
$(".users-interact").toggle("hide");
$(".reply").toggle("hide");

$(".tweet").click(function(){
    $(".stats").toggle("show");
    $(".favorites").toggle("show");
    $(".users-interact").toggle("show");
    $(".reply").toggle("show");
    
});



$('#alagoon').tooltip().title("Bruce Wayne");
$('#damen').tooltip();
$('#vkli').tooltip();
$('#jenny').tooltip();
$('#funwater').tooltip();




















});