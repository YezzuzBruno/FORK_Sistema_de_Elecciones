namespace Dominio.Votacion.entities {
  interface IEleccionStrategy {
    calcularResultado(): string;
  }

  class Eleccion {
    private _idEleccion: number = 0;
    private _idVoto: number = 0;
    private _nombre: string = "";
    private _fecha: string = "";
    private _estadoEleccion: string = "";
    private _strategy: IEleccionStrategy; // Referencia a la estrategia

    constructor(strategy: IEleccionStrategy) {
      this._strategy = strategy;
    }

    // Resto de los métodos y propiedades de Eleccion
    // Getter para la propiedad idEleccion
    get idEleccion(): number {
      return this._idEleccion;
    }
  
    // Setter para la propiedad idEleccion
    set idEleccion(value: number) {
      this._idEleccion = value;
    }
  
    // Getter para la propiedad idVoto
    get idVoto(): number {
      return this._idVoto;
    }
  
    // Setter para la propiedad idVoto
    set idVoto(value: number) {
      this._idVoto = value;
    }
  
    // Getter para la propiedad nombre
    get nombre(): string {
      return this._nombre;
    }
  
    // Setter para la propiedad nombre
    set nombre(value: string) {
      this._nombre = value;
    }
  
    // Getter para la propiedad fecha
    get fecha(): string {
      return this._fecha;
    }
  
    // Setter para la propiedad fecha
    set fecha(value: string) {
      this._fecha = value;
    }
  
    // Getter para la propiedad estadoEleccion
    get estadoEleccion(): string {
      return this._estadoEleccion;
    }
  
    // Setter para la propiedad estadoEleccion
    set estadoEleccion(value: string) {
      this._estadoEleccion = value;
    }

    // Método para calcular el resultado utilizando la estrategia
    calcularResultado(): string {
      return this._strategy.calcularResultado();
    }
  }

  // Estrategias concretas
  class EleccionPresidencialStrategy implements IEleccionStrategy {
    calcularResultado(): string {
      // Lógica específica para elecciones presidenciales
      return "Resultado de elección presidencial";
    }
  }

  class EleccionParlamentariaStrategy implements IEleccionStrategy {
    calcularResultado(): string {
      // Lógica específica para elecciones parlamentarias
      return "Resultado de elección parlamentaria";
    }
  }

  // Uso
  const eleccionPresidencial = new Eleccion(new EleccionPresidencialStrategy());
  console.log(eleccionPresidencial.calcularResultado());

  const eleccionParlamentaria = new Eleccion(new EleccionParlamentariaStrategy());
  console.log(eleccionParlamentaria.calcularResultado());
}

  
