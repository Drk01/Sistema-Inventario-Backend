import { createConnection } from 'typeorm';

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    await createConnection();
  }
}
