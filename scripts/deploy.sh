#!/bin/bash
pwd=$(pwd)


cd /home/wrestling_cards/current/backend/frontend
npm install
npm run build

cd /home/wrestling_cards/current/backend/backend
npm install