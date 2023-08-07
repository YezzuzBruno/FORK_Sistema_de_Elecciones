import * as mysql from 'mysql2/promise';
import { createLogger, transports, format } from 'winston';

class ConnectionDB {
  private connectionProps: any;
  private conn: mysql.Connection | null;
  private dbms: string;
  private dbName: string;
  private serverName: string;
  private portNumber: string;

  private readonly JDBC: string = 'jdbc:';
  private logger: any;

  constructor(username?: string, password?: string) {
    this.connectionProps = {
      user: username,
      password: password,
    };
    this.conn = null;
    this.dbms = '';
    this.dbName = '';
    this.serverName = '';
    this.portNumber = '';

    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
      transports: [
        new transports.Console(),
      ],
    });
  }

  getConnectionProps() {
    return this.connectionProps;
  }

  setConnectionProps(connectionProps: any) {
    this.connectionProps = connectionProps;
  }

  getConnection() {
    return this.conn;
  }

  setConnection(conn: mysql.Connection) {
    this.conn = conn;
  }

  getDbms() {
    return this.dbms;
  }

  setDbms(dbms: string) {
    this.dbms = dbms;
  }

  getDbName() {
    return this.dbName;
  }

  setDbName(dbName: string) {
    this.dbName = dbName;
  }

  getServerName() {
    return this.serverName;
  }

  setServerName(serverName: string) {
    this.serverName = serverName;
  }

  getPortNumber() {
    return this.portNumber;
  }

  setPortNumber(portNumber: string) {
    this.portNumber = portNumber;
  }

  async createConnection() {
    let newConnection: mysql.Connection | null = null;
    try {
      if (this.getDbms() === 'mysql') {
        newConnection = await mysql.createConnection({
          host: this.getServerName(),
          user: this.getConnectionProps().user,
          password: this.getConnectionProps().password,
          database: this.getDbName(),
          port: parseInt(this.getPortNumber()),
        });
      } else if (this.getDbms() === 'postgreSQL') {
        // Create connection for PostgreSQL
      } else if (this.getDbms() === 'derby') {
        // Create connection for Derby
      }

      if (newConnection) {
        this.setConnection(newConnection);
        this.logger.info('Connected to database');
      }
    } catch (error) {
      this.logger.error(error);
    }

    return newConnection;
  }
}

export default ConnectionDB;
