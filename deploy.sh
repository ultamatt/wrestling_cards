#!/bin/bash

cd $0/frontend
npm install
npm run build

cd $0/backend
npm install
