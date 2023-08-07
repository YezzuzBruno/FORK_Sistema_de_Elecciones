# SISTEMA DE ELECCIONES

## Alumno:

- Jesus Bruno Chancayauri Soncco

### LABORATORIO 9 : ESTILOS DE PROGRAMACIÓN

Los estilos de programación que utilice en la implementacion que estuvo bajo mi responsabilidad, son los siguientes:

- Programación orientada a objetos:

  - Clases: La clase Votante es una representación de un objeto de tipo "Votante" con sus atributos y métodos. Se utiliza el concepto de clases y objetos para modelar la entidad del dominio que estamos trabajando.
    ```typescript
    class Votante extends Usuario {
      private fechaNacimiento: string;
      private genero: string;
      private ocupacion: string;
    
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
      /*others functions...*/
    }
    ```
  
  - Encapsulación: Los atributos de la clase Votante (fechaNacimiento, genero y ocupacion) están definidos como privados, lo que significa que solo se pueden acceder y modificar desde dentro de la propia clase. Esto ayuda a proteger los datos y mantener la integridad de los objetos.
    ```typescript
      private fechaNacimiento: string;
      private genero: string;
      private ocupacion: string;
    ```
  
  - Herencia: La clase Votante hereda de la clase Usuario, lo que significa que Votante es una subclase de Usuario. La herencia permite reutilizar código y establecer una relación entre las clases, donde Votante hereda los atributos y métodos de Usuario.
  
    ```typescript
    class Votante extends Usuario
    ```
  
  - Polimorfismo: Aunque no se muestra en el código proporcionado, el polimorfismo permite que objetos de distintas clases que heredan de Usuario se utilicen de manera intercambiable. Por ejemplo, si tenemos una función que acepta un objeto Usuario, también podemos pasarle un objeto Votante, ya que Votante es una subclase de Usuario.
- Programación funcional

  - Funciones puras: Las funciones getFechaNacimiento(), getGenero() y getOcupacion() son funciones puras, ya que no tienen efectos secundarios y su resultado depende únicamente de los valores de entrada. No modifican ningún estado y siempre devuelven el mismo resultado para los mismos argumentos.
     ```typescript
      // Getter methods (funciones puras)
      getFechaNacimiento(): string {
        return this.fechaNacimiento;
      }
    
      getGenero(): string {
        return this.genero;
      }
    
      getOcupacion(): string {
        return this.ocupacion;
      }
     ```
  
  - Funciones de orden superior: Las funciones cambiarFechaNacimiento(), cambiarGenero() y cambiarOcupacion() son funciones de orden superior, ya que toman una función como argumento (por ejemplo, fechaNacimiento en cambiarFechaNacimiento()) y devuelven otra función. Esto permite realizar operaciones más abstractas y genéricas.
  
     ```typescript
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
     ```

- Programación Estructurada o Imperativa

  En este estilo, el código se organiza secuencialmente y se enfoca en instrucciones que se ejecutan una tras otra para lograr el resultado deseado.
  Este estilo lo emplee en el servicio de Trámite Electoral.

     ```typescript
    /**
     * Implementar el metodo que elige el estado de la eleccion
     */
    public verificacionEstadoEleccion() {
      console.log("Verificando estado de la elección...");
      if (this.estadoEleccion === "Pendiente") {
        console.log("La elección está pendiente.");
      } else if (this.estadoEleccion === "En curso") {
        console.log("La elección está en curso.");
      } else if (this.estadoEleccion === "Finalizada") {
        console.log("La elección ha finalizado.");
      } else {
        console.log("Estado de elección desconocido.");
      }
    }

    /**
     * Implementa el metodo que cuenta los votos
     */
    public conteoVotos() {
      console.log("Contando votos...");
      console.log("Total de votos: " + this.votos);
    }

    /**
     * Implementa el metodo que verifica los candidatos
     */
    public verificacionCandidato() {
      console.log("Verificando candidatos...");
      this.candidatosVerificados = true;
      console.log("Candidatos verificados correctamente.");
    }

    /**
     * Implementa el metodo que valida al votante.
     */
    public validacionVotante() {
      console.log("Validando votante...");
      this.votanteValidado = true;
      console.log("Votante validado correctamente.");
    }

    /**
     * Implementa el metod que confirma el voto
     */
    public confirmacionVoto() {
      console.log("Confirmando voto...");
      this.votoConfirmado = true;
      console.log("Voto confirmado correctamente.");
    }
     ```
### LABORATORIO 10 : Codificación legible

1. Uso de nombres descriptivos
   - Versión mala:
     ```typescript
     class E {
       private _i: number = 0;
       private _n: string = "";
       // ...
     }
     ```
  
    - Versión correcta
      ```typescript
      class Eleccion {
        private _idEleccion: number = 0;
        private _nombre: string = "";
        // ...
      }
       ```
      En la versión correcta, los nombres de las variables son más descriptivos, lo que facilita la comprensión del propósito de cada propiedad.

2. Sangría y formato consistente
   - Versión mala:
     ```typescript
     class Eleccion {
     private _idEleccion: number = 0;
     private _nombre: string = "";
     // ...
     }
     ```
  
    - Versión correcta
      ```typescript
      class Eleccion {
        private _idEleccion: number = 0;
        private _nombre: string = "";
        // ...
      }
       ```
      En la versión correcta, el código está bien indentado, lo que mejora la legibilidad.
3. Uso de getters y setters
   - Versión mala:
     ```typescript
     class Eleccion {
        idEleccion: number = 0;
      
        setIdEleccion(value: number) {
          this.idEleccion = value;
        }
     }
     ```
  
    - Versión correcta
      ```typescript
      class Eleccion {
        private _idEleccion: number = 0;
      
        get idEleccion(): number {
          return this._idEleccion;
        }
      
        set idEleccion(value: number) {
          this._idEleccion = value;
        }
      }

       ```
      En la versión correcta, se utilizan getters y setters para acceder y modificar la propiedad privada _idEleccion.
4. Nombres de espacios y clases
   - Versión mala:
     ```typescript
     namespace dominioVotacionEntities {
       class eleccion {
         // ...
       }
     }
     ```
  
    - Versión correcta
      ```typescript
      namespace Dominio.Votacion.entities {
        class Eleccion {
          // ...
        }
      }
      ```
      En la versión correcta, los nombres de las variables son más descriptivos, lo que facilita la comprensión del propósito de cada propiedad.
5. Uso de nombres de propiedades en minúsculas
   - Versión mala:
     ```typescript
     class Eleccion {
       private _Id_Eleccion: number = 0;
       // ...
     }
     ```
  
    - Versión correcta
      ```typescript
      class Eleccion {
        private _idEleccion: number = 0;
        // ...
      }
      ```
      En la versión correcta, los nombres de las propiedades se escriben en minúsculas con formato de palabras separadas por guiones bajos (snake_case), que es una convención común en otros lenguajes, pero en TypeScript generalmente se prefiere camelCase.
6. Uso de propiedades privadas
   - Versión mala:
     ```typescript
     class Eleccion {
       idEleccion: number = 0;
       // ...
     }
     ```
  
    - Versión correcta
      ```typescript
      class Eleccion {
        private _idEleccion: number = 0;
        // ...
      }
      ```
      En la versión correcta, las propiedades de la clase están marcadas como privadas con el prefijo _, lo que ayuda a establecer un contrato claro de acceso a los datos.
7. Documentación de comentarios
   - Versión mala:
     ```typescript
     class Eleccion {
      private _idEleccion: number = 0;
    
      get idEleccion(): number {
        return this._idEleccion;
      }
    
      set idEleccion(value: number) {
        this._idEleccion = value;
      }
     }
     ```
  
    - Versión correcta
      ```typescript
      class Eleccion {
        private _idEleccion: number = 0;
      
        /**
         * Obtiene el ID de la elección.
         */
        get idEleccion(): number {
          return this._idEleccion;
        }
      
        /**
         * Establece el ID de la elección.
         * @param value Nuevo valor para el ID de la elección.
         */
        set idEleccion(value: number) {
          this._idEleccion = value;
        }
      }
      ```
      En la versión correcta, se utilizan comentarios para documentar el propósito de los getters y setters, lo que ayuda a otros desarrolladores a comprender cómo interactuar con la clase.

### LABORATORIO 11 : Principios SOLID

1. Single Responsibility Principle (SRP):
   Este primer principio dice que “una clase debe tener una sola razón para cambiar”, es decir, debe tener una sola responsabilidad.
   
   a) Clase Votante: Lo que se hizo en primer lugar fue establecer la clase Votante. Esta clase se encarga únicamente de representar la entidad Votante y no debería contener lógica relacionada con la creación y actualización. A continuación se muestra la clase:
   ```typescript
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
      
      }
   }
   ```
   b) Servicio de Creación/Actualización de Votantes: Se creó un servicio separado para manejar la creación y actualización de los votantes. Esto ayuda a mantener la lógica relacionada con la base de datos y las operaciones de actualización en un lugar separado.
   ```typescript
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
        //Función para actualizar el atributo genero (estilo funcional)
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
   ```
