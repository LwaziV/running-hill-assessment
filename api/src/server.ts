import app from './config/app';
import * as dotenv from 'dotenv';
import DbClient from './services/db-client';

dotenv.config();
const environment = process.env.environment || 'development';
const PORT: any = process.env.PORT || 3000;

DbClient.connect().then(() => {
  console.log('connected to the database');
  console.log('DB: ' + process.env.DB_CONNECTION_STRING);
  console.log(`Environment: ${environment}`);
  // Start the express server
  app.listen(PORT, async () => {
    console.log('Express server listening on port ' + PORT);
  });
});