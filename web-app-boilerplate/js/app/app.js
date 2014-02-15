define([
    'app/views/app'
], function(AppView){
    'use strict';

    var initialize=function(){
      var appView=new AppView();
/*      appView.initialise();*/
      $('body').append(appView.el);
    };

    return{
      initialize:initialize
    }
});
