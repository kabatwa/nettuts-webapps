define(["backbone","app/models/day"],function(e,t){var n=e.Collection.extend({model:t,sync:function(t,n,r){return r.timeout=8e3,r.dataType="jsonp",e.sync(t,n,r)},parse:function(e){return e.forecast.simpleforecast.forecastday}});return n});