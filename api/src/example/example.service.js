exports = module.exports = ExampleService;
exports['@require'] = [
  'app',
  'app/util/fs',
  'app/util/template',
  'app/example/example.daemon',
];

function ExampleService(app, fs, template, daemon) {
  var entryTemplateFile = 'app/example/example.config-entry.mustache';

  return {
    add: add,
    remove: remove
  };

  function add(info) {
    return generateEntry(info)
      .then(saveEntry)
      .then(daemon.restart);

    function saveEntry(entry) {
    }
  }

  function remove(mac) {
  }

  function generateEntry(info) {
    var templateData = {
    };

    return template.render(entryTemplateFile, templateData);
  }
}
