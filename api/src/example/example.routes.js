exports = module.exports = ExampleRoutes;
exports['@require'] = ['app', 'express', 'electrolyte'];

function ExampleRoutes(app, express, IoC) {
  var router = new express.Router();

  router.post('/', IoC.route('app/example/example.route.create'));
  router.delete('/:id', IoC.route('app/example/example.route.delete'));

  app.use('/example', router);
}
