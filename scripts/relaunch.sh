#!/bin/bash

cd /home/wrestling_cards/current/backend
pm2 delete backend
pm2 start ./src/index.js --name backend

cd /home/wrestling_cards/current/frontend/build
pm2 delete frontend
pm2 start /usr/bin/http-server --name frontend -- -p 80 -d false
