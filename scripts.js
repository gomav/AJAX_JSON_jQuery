'use strict';
$(function(){
    $.getJSON('cars.json', function(cars){

        var template = $('#carimagestemplate').html();
        var html=Mustache.to_html(template, cars);
        $('.carimages').html(html);


    });

});
