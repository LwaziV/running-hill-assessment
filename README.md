# running-hill-assessment
A web application that allows you to dynamically build a sentence by selecting words based on their word types.

This application was built using:
Angular
Node.js
MongoDB

To run it locally you will need to have your environment set up.
PLEASE NOTE: You will need to navigate to the api once open on an IDE and create a new file called ".env"
Add two variables called:
DB_CONNECTION_STRING="" (this will be provided on request to connect to MongoDB)
PORT=3000

To run the application these are the commands needed:
api:
npm install --save
npm run dev
ui:
npm install --save
ng serve --open
