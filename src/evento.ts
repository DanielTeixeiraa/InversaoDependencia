export class Evento {
    private nome: string;
    private local: string;
  
    constructor(nome: string, local: string) {
      this.nome = nome;
      this.local = local;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getLocal(): string {
      return this.local;
    }
  }
  