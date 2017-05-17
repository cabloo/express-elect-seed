exports = module.exports = create;
exports['@require'] = [
  'app/example/example.service',
  'app/util/log',
  'app/errors/bad-request',
  'app/errors/server-error',
];
function create(example, log, BadRequest, ServerError) {
  return [
    checkRequest,
    changeExample,
    successResponse,
  ];

  function checkRequest(req, res, next) {
    /*if (!req.body.some_required_field) {
      return next(new BadRequest('Missing a required field'));
    }*/

    next();
  }

  function changeExample(req, res, next) {
    example.add(req.body)
      .then(next.bind(null, null), errorResponse)
      ;

    function errorResponse(error) {
      log.error(error);
      next(new ServerError(error));
    }
  }

  function successResponse(req, res) {
    res.success("Created Example");
  }
}
