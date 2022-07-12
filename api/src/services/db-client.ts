import * as mongodb from 'mongodb';

export default class DbClient {
  public static db: mongodb.Db;
  public static collections;
  public static client: mongodb.MongoClient;
  public static async connect() {
  this.client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION_STRING);
    this.db = await this.client.db('runninghill');
    return this.db;
  }
}
