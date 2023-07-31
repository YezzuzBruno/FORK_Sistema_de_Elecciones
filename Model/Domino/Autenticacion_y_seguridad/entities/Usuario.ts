namespace Dominio.AutenticacionYseguridad.entities {
  export class Usuario {
    protected nombre: string;
    protected correo: string;
    protected rol: string;
    protected dni: string;

    constructor(nombre: string, correo: string, rol: string, dni: string) {
      this.nombre = nombre;
      this.correo = correo;
      this.rol = rol;
      this.dni = dni;
    }

    // Métodos de acceso para obtener las propiedades protegidas
    getNombre(): string {
      return this.nombre;
    }

    getCorreo(): string {
      return this.correo;
    }

    getRol(): string {
      return this.rol;
    }

    getDni(): string {
      return this.dni;
    }
  }
}

const Usuario = Dominio.AutenticacionYseguridad.entities.Usuario;
