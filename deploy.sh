#!/bin/bash

cd /home/wrestling_cards/%RELEASE_ID%/frontend
npm install
npm run build

cd /home/wrestling_cards/%RELEASE_ID%/backend
npm install
