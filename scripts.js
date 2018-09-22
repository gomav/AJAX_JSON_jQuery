'use strict';
$(function(){
    //using jQuery to access the cars JSON
    $.getJSON('cars.json', function(cars){
    //using an external domain to access JSON; note must be in same domain
    //(same domain policy) in order to access most hosting services will block
    //external access to server files requests. This is how you get around it
    //wrap JSON with dataHandler(); this works because scripts do not have that
    //same policy.

    //$.getJSON('http:emaginas.com/cars.json', function(cars))

        //grabbing images and sending to hmtl div for display
        var template = $('#carimagestemplate').html();
        var html = Mustache.to_html(template, cars);
        $('.carimages').html(html);
        //targeting carimages again using cycle plugin (jQuery for slider)
        $('.carimages').cycle({
            //desired effects for using the jQuery cycle plugin
            fx : 'fade',
            pause: 1,
            //next and prev are essentially ids that need to be fleshed out
            //in html index file
            next: '#next',
            prev: '#prev',
            speed: 1000,
            timeout: 1000

        });
    });
});

//The code below is what would be solely on scripts in order to access JSON file
//with dataHandler() wrapper.
/*function dataHandler(cars){
    var template = $('#carimagestemplate').html();
    var html = Mustache.to_html(template, cars);

    $('.carimages').html(html);
    $('.carimages').cycle({
        next: '#next',
        prev: '#prev',
        speed: 1000,
        timeout: 1000

    });
}
*/
