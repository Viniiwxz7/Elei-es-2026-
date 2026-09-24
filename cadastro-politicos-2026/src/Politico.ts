import { DadosPolitico, Esfera, Poder } from "./tipos";

/**
 * Classe abstrata Politico
 * ABSTRAÇÃO: define o contrato comum; não pode ser instanciada.
 * ENCAPSULAMENTO: atributos privados com getters/setters.
 * HERANÇA: base para Presidente, Governador, Deputados e Senador.
 * POLIMORFISMO: exercerMandato() e listarAcoes() são implementados de forma diferente em cada subclasse.
 */
export abstract class Politico {
  private _nome: string;
  private _partido: string;
  private _esfera: Esfera;
  private _poder: Poder;
  private _nomeLocalTrabalho: string;
  private _enderecoLocalTrabalho: string;
  private _remuneracao: number;
  private _projetos: string[];

  constructor(
    dados: DadosPolitico,
    esfera: Esfera,
    poder: Poder
  ) {
    this._nome = dados.nome;
    this._partido = dados.partido;
    this._esfera = esfera;
    this._poder = poder;
    this._nomeLocalTrabalho = dados.nomeLocalTrabalho;
    this._enderecoLocalTrabalho = dados.enderecoLocalTrabalho;
    this._remuneracao = dados.remuneracao;
    this._projetos = [...dados.projetos];
  }

  get nome(): string {
    return this._nome;
  }
  set nome(valor: string) {
    if (!valor.trim()) throw new Error("Nome não pode ser vazio.");
    this._nome = valor;
  }

  get partido(): string {
    return this._partido;
  }
  set partido(valor: string) {
    if (!valor.trim()) throw new Error("Partido não pode ser vazio.");
    this._partido = valor;
  }

  get esfera(): Esfera {
    return this._esfera;
  }

  get poder(): Poder {
    return this._poder;
  }

  get nomeLocalTrabalho(): string {
    return this._nomeLocalTrabalho;
  }
  set nomeLocalTrabalho(valor: string) {
    this._nomeLocalTrabalho = valor;
  }

  get enderecoLocalTrabalho(): string {
    return this._enderecoLocalTrabalho;
  }
  set enderecoLocalTrabalho(valor: string) {
    this._enderecoLocalTrabalho = valor;
  }

  get remuneracao(): number {
    return this._remuneracao;
  }
  set remuneracao(valor: number) {
    if (valor < 0) throw new Error("Remuneração não pode ser negativa.");
    this._remuneracao = valor;
  }

  get projetos(): readonly string[] {
    return this._projetos;
  }

  adicionarProjeto(titulo: string): void {
    if (!titulo.trim()) throw new Error("Título do projeto não pode ser vazio.");
    this._projetos.push(titulo);
  }

  protected formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  /** POLIMORFISMO: cada cargo descreve o próprio mandato. */
  abstract exercerMandato(): void;

  /** POLIMORFISMO: cada cargo lista suas ações específicas. */
  abstract listarAcoes(): string[];

  cadastroResumo(): string {
    return [
      `Nome: ${this.nome}`,
      `Partido: ${this.partido}`,
      `Cargo: ${this.constructor.name}`,
      `Esfera: ${this.esfera} | Poder: ${this.poder}`,
      `Local de trabalho: ${this.nomeLocalTrabalho}`,
      `Endereço: ${this.enderecoLocalTrabalho}`,
      `Remuneração: ${this.formatarMoeda(this.remuneracao)}`,
      `Projetos: ${this.projetos.length ? this.projetos.join("; ") : "(nenhum)"}`,
    ].join("\n");
  }
}
