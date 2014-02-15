define([
    'jquery',
    'bootstrap'
], function($, bootstrap){
    'use strict';

    var id='content';

    var getId=function(){
      return id;
    };

    var getTimeString=function(){
        var date=new Date();
        return [date.getHours(),':', date.getMinutes()].join('');
    };

    var  initialise=function(){
        $('body').append('<div id="'+id+'"></div>');
    };

    var displayTime=function(){
      var html=[
        '<div class="alert alert-info">',
            '<button type="button" class="close" data-dismiss="alert">&times;</button>',
            'The time is: ',
            getTimeString(),
        '</div>'
      ].join('');
      $('#'+id).html(html);
    };

    return{
      initialise:initialise,
      displayTime:displayTime,
      getId:getId
    }
});
