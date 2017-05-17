exports = module.exports = destroy;
exports['@require'] = [
  'app/example/example.service',
  'app/errors/bad-request',
];
function destroy(example, BadRequest) {
  return [
    checkRequest,
    changeExample,
    successResponse,
  ];

  function checkRequest(req, res, next) {
    /*
    if (!req.body.some_required_field) {
      return next(new BadRequest('Missing entity.ip field'));
    }
    */

    next();
  }

  function changeExample(req, res, next) {
    example.remove(req.params.id)
      .then(next.bind(null, null))
      .catch(errorResponse)
      ;

    function errorResponse(error) {
      next(new Error(error));
    }
  }

  function successResponse(req, res) {
    res.success("Deleted Example");
  }
}
