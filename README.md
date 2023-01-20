# DE3Angular

# Projet 

The project is to develop a front-end app that displays :
- a navigation bar with 
  - a link to products list
  - a link to users list
  - a link to orders list
  - a contact form

List are loaded from static json files stored in the backend.
Each list enables a click to a detail screen, showing the details of :
- a product
- a user
- an order

Contact form enables to enter an email and a message, with a button to send the message (an alert or a modal will be displayed with the content entered).

# Modalities

Project has to be done individually or by pair. 

## Technical stack

Front-end will be built using Angular.

An additional CSS lib can be used for a better design, but it is not mandatory.

## Deliverables

The expected deliverable will be a Git repo or a zip of your source code, with all your source files.

Send the URL of the Git repo or the zip by mail to your teacher thanks to Mootse.

Please send it for date 23/01 at 00:00 (group A2)

# Clone and run project 
To run this projet have to clone this repository first. 

Then in your terminal (inside your project) run those commande : 

```bash
npm install 
```

```bash
ng serve
```

## Project organization

### Components

- Order-list : Component in charge of listing all orders 
- Order-detail : Component displaying the details of the orders
- produt-list : Component in charge of listing all the products
- Product-detail : Detail of the products
- User-list : display of the users
- User-detail : User details
- contact : Management of customer returns

### Services

- order.service: order data management
- product.service : product data management services
- user.service : User data management

### data schemas

- orderSchema : order data schemas 
- productSchema : product data schemas
- userSchema : user data schemas

## Build project  

```bash 
ng build --configuration production
```

You can put the content of the dist folder in a web server to run the application.
