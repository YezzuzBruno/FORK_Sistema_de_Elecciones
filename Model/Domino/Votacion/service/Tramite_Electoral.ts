namespace Dominio.Votacion.service {
  class TramiteElectoral {
    private estadoEleccion: string;
    private votos: number;
    private candidatosVerificados: boolean;
    private votanteValidado: boolean;
    private votoConfirmado: boolean;

    /**
     * Constructor por defecto
     */
    constructor() {
      this.estadoEleccion = "Pendiente";
      this.votos = 0;
      this.candidatosVerificados = false;
      this.votanteValidado = false;
      this.votoConfirmado = false;
    }

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
  }
}
  
