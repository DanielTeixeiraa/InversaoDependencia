import { Evento } from './evento';

export class Ingresso {
  private codigo: string;
  private preco: number;
  private evento: Evento;

  constructor(codigo: string, preco: number, evento: Evento) {
    this.codigo = codigo;
    this.preco = preco;
    this.evento = evento;
  }

  getCodigo(): string {
    return this.codigo;
  }

  getPreco(): number {
    return this.preco;
  }

  getEvento(): Evento {
    return this.evento;
  }
}