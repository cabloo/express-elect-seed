exports = module.exports = exampleDaemonFactory;
exports['@require'] = ['child_process', 'app', 'app/util/log', 'q'];
function exampleDaemonFactory(childProcess, app, log, Q) {
  return new ExampleDaemon(childProcess, app, log, Q);
}

function ExampleDaemon(childProcess, app, log, Q) {
  var me = this;

  this.restart = restart;

  function restart() {
    var deferred = Q.defer();
    var restart = childProcess.spawn(app.get('bin.example.restart'));
    var errors = '';

    restart.stdout.on('data', debug);
    restart.stderr.on('data', error);
    restart.on('exit', handleExit);

    return deferred.promise;

    function handleExit (code) {
      if (code === 0) {
        log.debug('Example Daemon restarted successfully.');
        deferred.resolve(me);

        return;
      }

      log.error('Example Daemon failed to restart with status code ' + code);
      deferred.reject(errors);
    }

    function debug(data) {
      log.debug(''+data);
    }

    function error(data) {
      errors += data;

      log.error(''+data);
    }
  }
}
