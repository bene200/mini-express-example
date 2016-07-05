//index.js just initializes the app
//initialization logic is in server/init.js
//therefore, we need to require in the module
var init = require('./server/init');

//init is now the function we exported in server/init.js
//call it to start the app
init();
