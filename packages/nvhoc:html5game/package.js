Package.describe({
  name: 'nvhoc:html5game',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' https://github.com/nvhoc/htm5game.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('nvhoc:html5game.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nvhoc:html5game');
  api.addFiles('nvhoc:html5game-tests.js');
});
