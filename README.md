# Bookstore

Crud persistant Book Entity.

## View: http://ec2-52-59-194-236.eu-central-1.compute.amazonaws.com:8082/

### Tech Stack

Server: Node.js express, Knex, Bookshelf (ORM), morgan (Logger)  
Client: Bootstrap, Angular.js, byte-size-icons, responsive  
Tests: Mocha, supertest

### Steps to install (Dependencies)

* `yarn install` or `npm install` to get all packages
* in public folder`yarn install` or `npm install` to get all client side packages
* create a new .env file from the .env-example file and provide DB access details
* `knex migrate:latest` - to build to application tables
* `knex seed:run` - to populate with initial data

### Start

`npm start`

### Test

`npm test`
will test Book crud api, and catalog (list of books names).
