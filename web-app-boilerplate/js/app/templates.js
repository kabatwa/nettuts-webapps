define([
    'underscore'
],function(_){

  var Templates={};
  Templates['place']=[
    '<div class="panel panel-info">',
    '<div class="panel-heading">',
    '<h3 class="panel-title">',
    '<%= name %> - <%= countryCode %>',
    '</h3>',
    '</div>',
    '<div class="panel-body">',
    'Panel content',
    '</div>',
    '</div>'
  ].join('');

  Templates['day']=[
    '<div class="forecast-day">',
    '<h3><%= weekday %></h3>',
    '<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
    '<p class="forecast-fahr"><%= lowFahrenheit %>°F - <%= highFahrenheit %>°F</p>',
    '<p class="forecast-cel"><%= lowCelsius %>°C - <%= highCelsius %>°C</p>',
    '<div class="forecast-conditions"><%= conditions %></div>',
    '</div>'
  ].join('');

  Templates['modal']=[
    '<div class="modal fade">',
      '<div class="modal-dialog">',
        '<div class="modal-content">',
          '<div class="modal-header">',
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
            '<h4 class="modal-title"><%=title %></h4>',
          '</div>',
          '<div class="modal-body"></div>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');

  for (var tmpl in Templates) {
    if (Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl]=_.template(Templates[tmpl]);
    }
  }

  return Templates;
});
