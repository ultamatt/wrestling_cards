#!/bin/bash

cd /home/wrestling_cards/$RELEASE/frontend
npm install
npm run build

cd /home/wrestling_cards/$RELEASE/backend
npm install
