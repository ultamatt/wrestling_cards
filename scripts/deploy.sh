#!/bin/bash
pwd=$(pwd)

cd /home/wrestling_cards/current/frontend
npm install
npm run build

cd /home/wrestling_cards/current/backend
npm install