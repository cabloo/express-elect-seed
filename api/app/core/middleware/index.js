exports = module.exports = loadMiddleware;
exports['@require'] = [
  'app',
  'app/core/middleware/body-parser',
  'app/core/middleware/log-requests',
  'app/core/middleware/response-macros',
];

function loadMiddleware (app) {
  for (var i = 1; i < arguments.length; i++) {
    app.use(arguments[i]);
  }
}
