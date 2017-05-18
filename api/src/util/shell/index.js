exports = module.exports = ExampleService;
exports['@require'] = [
  'child_process',
  'q',
];

function ExampleService(childProcess, Q) {
  var shell = this;

  shell.run = run;

  function run(command) {
    var deferred = Q.defer();
    var restart = childProcess.spawn(command);
    var errors = '';
    var output = '';

    restart.stdout.on('data', debug);
    restart.stderr.on('data', error);
    restart.on('exit', handleExit);

    return deferred.promise;

    function handleExit(code) {
      if (code === 0) {
        deferred.resolve(me);

        return;
      }

      deferred.reject({
        code: code,
        error: errors,
        output: output,
      });
    }

    function debug(data) {
      output += data;
    }

    function error(data) {
      errors += data;
    }
  }
}
