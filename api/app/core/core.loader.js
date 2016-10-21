exports = module.exports = coreLoader;
exports['@require'] = [
  // Sets up Application configuration variables.
  'app/core/core.config',

  // Guarantee certain functions will be available on certain types.
  'app/core/core.shims',

  // Load API router.
  'app/core/core.routes',
];

function coreLoader() {}
