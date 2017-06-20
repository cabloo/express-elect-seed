#!/usr/bin/env bash

./bin/node-setup.sh
apt-get install -y nodejs
npm i
ln -s ../src node_modules/src; cp src/config.example.js src/config.js
