namespace Dominio.Votacion.entities {
  class Eleccion {
    private _idEleccion: number = 0;
    private _idVoto: number = 0;
    private _nombre: string = "";
    private _fecha: string = "";
    private _estadoEleccion: string = "";
  
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
  }
  
}
  
