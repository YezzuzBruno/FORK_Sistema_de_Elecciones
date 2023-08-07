import { createLogger, transports, format } from 'winston';
import ConnectionDAO from './db'; // Asegurarse de tener la clase ConnectionDB en un archivo llamado db.ts


export class VotanteDB {
  private logger: any;

  constructor() {
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

  async save(votante: Votante) {
    const connectionDAO = new ConnectionDAO('root', '');
    connectionDAO.setDbms('mysql');
    connectionDAO.setServerName('localhost');
    connectionDAO.setPortNumber('8080');
    connectionDAO.setDbName('sistema_elecciones');

    try {
      const connection = await connectionDAO.createConnection();
      
      if (connection) {
        const sql = `
          INSERT INTO votante 
          (nombre, correo, rol, dni, fechaNacimiento, genero, ocupacion) 
          VALUES 
          (?, ?, ?, ?, ?, ?, ?)
        `;
        const [result] = await connection.execute(sql, [
          votante.nombre,
          votante.correo,
          votante.rol,
          votante.dni,
          votante.fechaNacimiento,
          votante.genero,
          votante.ocupacion,
        ]);

        const affectedRows = (result as any).affectedRows;

        if (affectedRows !== undefined && affectedRows === 1) {
          this.logger.info(`Successfully inserted Votante - nombre: ${votante.nombre}`);
        } else {
          this.logger.error(`No Votante inserted.`);
        }
      } else {
        this.logger.error(`No se pudo establecer la conexión.`);
      }
    } catch (error) {
      this.logger.error(`No Votante inserted. ${error}`);
    }
  }
}

interface Votante {
  nombre: string;
  correo: string;
  rol: string;
  dni: string;
  fechaNacimiento: string;
  genero: string;
  ocupacion: string;
}

export default VotanteDB;



