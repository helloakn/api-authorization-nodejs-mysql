# Tutorial How to Create API with multi route prefixs as well as Multi Authorization  in NodeJs
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
