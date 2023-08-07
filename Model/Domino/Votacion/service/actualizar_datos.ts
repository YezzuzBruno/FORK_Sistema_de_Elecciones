namespace Dominio.Votacion.service {
   import Votante = Dominio.Votacion.entities.Votante;
    export class VotanteService{
        // Función para actualizar el atributo fechaNacimiento (estilo funcional)
        cambiarFechaNacimiento(votante: Votante, fechaNacimiento: string): Votante {
            return new Votante(
              votante.getNombre(),
              votante.getCorreo(),
              votante.getRol(),
              votante.getDni(),
              fechaNacimiento,
              votante.getGenero(),
              votante.getOcupacion()
            );
        }
      // Función para actualizar el atributo genero (estilo funcional)
        cambiarGenero(votante: Votante, genero: string): Votante {
            return new Votante(
              votante.getNombre(),
              votante.getCorreo(),
              votante.getRol(),
              votante.getDni(),
              votante.getfechaNacimiento(),
              genero,
              votante.getOcupacion()
            );
        }
        // Función para actualizar el atributo ocupacion (estilo funcional)
        cambiarOcupacion(votante: Votante, ocupacion: string): Votante {
            return new Votante(
              votante.getNombre(),
              votante.getCorreo(),
              votante.getRol(),
              votante.getDni(),
              votante.getfechaNacimiento(),
              votante.getGenero(),
              ocupacion
            );
        }
    }
    
  }

  