import * as express from 'express';
import * as bodyParser from 'body-parser';
const cors = require('cors');
import routes from '../routes';

export class App {
  public app: express.Application;
  public port: any;

  constructor() {
    // Creating express and adding config to the express app
    this.app = express();

    this.app.set('trust proxy', true);
    this.config();
    this.app.use(cors());
    // General routes
    this.app.use('/api', routes);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(
      bodyParser.json({
        limit: '60mb',
      }),
    );
    //support application/x-www-form-urlencoded post data
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
        limit: '60mb',
      }),
    );

    this.app.use(bodyParser.raw());
  }
}
export default new App().app;
