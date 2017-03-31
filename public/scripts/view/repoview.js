'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $githubrepos = $('#githubrepos');

    $githubrepos.find('ul').empty();
    $githubrepos.show().siblings();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#githubrepos ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
