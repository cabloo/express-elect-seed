/**
 * Application Core
 * Responsibilities:
 * 	- Setup base routes (routed into other modules)
 * 	- Setup global middleware
 * 	- Setup global template settings
 */
var IoC = require('electrolyte');
var express = require('express');
var app = express();

require('app/core/core.ioc.js')(IoC, app);

IoC.create('app/core/core.loader.js');

module.exports = app;
