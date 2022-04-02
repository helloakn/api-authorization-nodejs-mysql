# Nodejs API Authorization

[![Star Count](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Star&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Fapi-authorization-nodejs-mysql)](https://github.com/helloakn/api-authorization-nodejs-mysql) [![Licence](https://img.shields.io/badge/dynamic/json?color=informational&label=LICENCE&query=license.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Fapi-authorization-nodejs-mysql)](https://github.com/helloakn/api-authorization-nodejs-mysql) [![Language](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Language&query=language&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Fapi-authorization-nodejs-mysql)](https://github.com/helloakn/api-authorization-nodejs-mysql)

Tutorial How to Create API with multi route prefixs as well as Multi Authorization  in NodeJs
## Installation
```
npm install
```
# .env
modify database information in .env as the following sample information.
```
SVR_PORT=3003
SVR_IP="0.0.0.0"
DB_HOST=localhost
DB_PORT=3306
DB_USER=urusername
DB_PASSWORD=urpassword
DB_NAME=jwt_tutorial
ALLOW_FROM=http://localhost:3000%
```
**ALLOW_FROM** is for admin dashboard application
## Run the program
```
npm run start
```
