# [DigitalFridge]()
## A full-stack MVC CRUD application for tracking grocery needs created for UA Coding Bootcamp Group Project 2.
### Created by [Anetta Goldsher](https://github.com/agoldsher), [Bradley King](https://github.com/bking1989), [Jose Leyva](https://github.com/jley914), and [Aretha Walls](https://github.com/arethashwalls).

**DigitalFridge** combines a shopping list and an inventory tracker. During the brainstorming phase of our project, Anetta complained that she frequently has difficulty tracking her shopping needs and suggested that we build an application to make home inventory management simpler. *DigitalFridge* also includes SMS functionality, allowing users to text themselves their shopping lists for convinience on the go.

*DigitalFridge* uses:

* The [Node.js](https://nodejs.org/en/) runtime environment.
* The [Express](https://expressjs.com/) framework.
* A [MySQL](https://www.mysql.com/) database.
* The [Sequelize](http://docs.sequelizejs.com/) ORM.
* The [Handlebars](http://handlebarsjs.com/) templating engine.

### Contents:

* `config`
  * [`config.json`](/config/config.json) sets up our Sequelize connection.
* `migration`
  * [`migration.js`](/migration/migration.js) holds our Sequelize seeding data.
* `models`
  * [`index.js`](/models/index.js) serves both models to other files that need them.
  * [`ingredient.js`](/models/ingredient.js) models our Ingredient table.
  * [`user.js`](/models/user.js) models our User table.
* `public/assets` contains all of our static code, including:
  * `images`
  * `js`
    * [`custom.js`](/public/assets/js/custom.js) contains a few custom redirect actions for the inventory page.
    * [`shopping.js`](/public/assets/js/shopping.js) contains custom redirects, two AJAX calls, and JQuery code for updating the UI based on user actions on the shopping list page.
    * [`splash.js`](/public/assets/js/splash.js) contains an AJAX call and JQuery UI updates for the login page.
  * `styles`
* `routes`
  * [`apiRoutes.js`](/routes/routes.js)
  * [`htmlRoutes.js`](/routes/routes.js)
  * [`smsRoutes.js`](/routes/routes.js) includes a POST route specifically for sending texts.
* [`views`](/views) contains all Handlebars templates.
* A `gitignore` file
* NPM's `package-lock.json` and `package.json` files.
* This `readme`.
* A [`server.js`](/server.js) file for setting up the Express server.

#### Front End

Our application has three views:

* The login page allows users to select an existing user from a list or create a new one. For the purposes of this project, we decided to forgo secure passwords, but may add them in later updates.
* The shopping list page displays all ingredients owned by the given user for which quantityNeeded is greater than 0.
* The inventory page displays all ingredients owned by the given user for which quantityOwned is greater than 0.

#### Data

Our MySQL database contains two tables with the following columns:

**Users**
* ID
* Username

**Ingredients**
* ID
* Name
* QuantityOwned
* QuantityNeeded
* UserId
