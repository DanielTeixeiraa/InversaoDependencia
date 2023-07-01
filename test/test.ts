import { Ingresso } from '../src/Ingresso';
import { Evento } from '../src/evento';

describe('Ingresso', () => {
    // Mocking the Evento class
    const eventoMock: Evento = {
      getNome: () => 'Evento de Teste',
      getLocal: () => 'Local de Teste',
    } as Evento;
  
    it('Codigo do ingresso correto', () => {
      const ingresso = new Ingresso('12345', 50, eventoMock);
      expect(ingresso.getCodigo()).toBe('12345');
    });
  
    it('Preco do ingresso correto', () => {
      const ingresso = new Ingresso('12345', 50, eventoMock);
      expect(ingresso.getPreco()).toBe(50);
    });
  
    it('Evento do ingresso correto', () => {
      const ingresso = new Ingresso('12345', 50, eventoMock);
      const evento = ingresso.getEvento();
      expect(evento.getNome()).toBe('Evento de Teste');
      expect(evento.getLocal()).toBe('Local de Teste');
    });
  });