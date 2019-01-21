#!/bin/bash
pwd=$(pwd)

cd $pwd/frontend
npm install
npm run build

cd $pwd/backend
npm install
