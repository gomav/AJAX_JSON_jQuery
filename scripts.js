'use strict';
$(function(){
    //using jQuery to access the cars JSON
    $.getJSON('cars.json', function(cars){
        //grabbing images and sending to hmtl div for display
        var template = $('#carimagestemplate').html();
        var html = Mustache.to_html(template, cars);
        $('.carimages').html(html);
        //targeting carimages again using cycle plugin (jQuery for slider)
        $('.carimages').cycle({
            //desired effects for using the jQuery cycle plugin
            fx : 'fade',
            pause: 1,
            next: '#next',
            prev: '#prev',
            speed: 1000,
            timeout: 1000

        });
    });
});
