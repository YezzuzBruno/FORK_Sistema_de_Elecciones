namespace Dominio.Votacion.entities {
  class Votante extends Usuario {
    private fechaNacimiento: string;
    private genero: string;
    private ocupacion: string;
  
    /**
     * Constructor de la clase Votante
     * @param nombre Nombre del votante
     * @param correo Correo electrónico del votante
     * @param rol
     * @param dni
     * @param fechaNacimiento Fecha de nacimiento del votante
     * @param genero Género del votante
     * @param ocupacion Ocupación del votante
     */
    constructor(
      nombre: string,
      correo: string,
      rol: string,
      dni: string,
      fechaNacimiento: string = "",
      genero: string = "",
      ocupacion: string = ""
    ) {
      super(nombre, correo, rol, dni); // Llamada al constructor de la clase base Usuario
      this.fechaNacimiento = fechaNacimiento;
      this.genero = genero;
      this.ocupacion = ocupacion;
    }
  
    // Getter methods (funciones puras)
    getfechaNacimiento(): string {
      return this.fechaNacimiento;
    }
  
    getGenero(): string {
      return this.genero;
    }
  
    getOcupacion(): string {
      return this.ocupacion;
    }
  
    // Función para actualizar el atributo fechaNacimiento (estilo funcional)
    cambiarFechaNacimiento(fechaNacimiento: string): Votante {
      return Object.assign(new Votante(this.nombre, this.correo, this.rol, this.dni, fechaNacimiento, this.genero, this.ocupacion), this);
    }
  
    // Función para actualizar el atributo genero (estilo funcional)
    cambiarGenero(genero: string): Votante {
      return Object.assign(new Votante(this.nombre, this.correo, this.rol, this.dni, this.fechaNacimiento, genero, this.ocupacion), this);
    }
  
    // Función para actualizar el atributo ocupacion (estilo funcional)
    cambiarOcupacion(ocupacion: string): Votante {
      return Object.assign(new Votante(this.nombre, this.correo, this.rol, this.dni, this.fechaNacimiento, this.genero, ocupacion), this);
    }
  }
}
