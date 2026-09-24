import { Politico } from "./Politico";
import { DadosPolitico, Esfera, Poder } from "./tipos";

export class Governador extends Politico {
  private _quantidadeSecretarios: number;
  private _nomeEstado: string;

  constructor(
    dados: DadosPolitico,
    quantidadeSecretarios: number,
    nomeEstado: string
  ) {
    super(dados, Esfera.Estadual, Poder.Executivo);
    this._quantidadeSecretarios = quantidadeSecretarios;
    this._nomeEstado = nomeEstado;
  }

  get quantidadeSecretarios(): number {
    return this._quantidadeSecretarios;
  }
  set quantidadeSecretarios(valor: number) {
    if (valor < 0) throw new Error("Quantidade de secretários inválida.");
    this._quantidadeSecretarios = valor;
  }

  get nomeEstado(): string {
    return this._nomeEstado;
  }
  set nomeEstado(valor: string) {
    if (!valor.trim()) throw new Error("Estado não pode ser vazio.");
    this._nomeEstado = valor;
  }

  exercerMandato(): void {
    console.log(
      `[Mandato de ${this.nome} - ${this.nomeEstado}] Sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC (Proposta de Emenda à Constituição) à Assembleia Legislativa.`
    );
  }

  gerirPoliciaMilitar(): string {
    return `Gerir a Polícia Militar do Estado de ${this.nomeEstado}.`;
  }

  administrarRodoviasEstaduais(): string {
    return `Administrar as rodovias estaduais de ${this.nomeEstado}.`;
  }

  coordenarEducacaoSaude(): string {
    return `Coordenar a educação e a saúde do Estado de ${this.nomeEstado}.`;
  }

  elaborarEnviarOrcamentoEstadual(): string {
    return `Elaborar e enviar à Assembleia Legislativa o Plano Plurianual estadual (PPA), a Lei de Diretrizes Orçamentárias estadual (LDO) e a proposta de Lei Orçamentária Anual estadual (LOA) de ${this.nomeEstado}.`;
  }

  listarAcoes(): string[] {
    return [
      this.gerirPoliciaMilitar(),
      this.administrarRodoviasEstaduais(),
      this.coordenarEducacaoSaude(),
      this.elaborarEnviarOrcamentoEstadual(),
    ];
  }

  override cadastroResumo(): string {
    return `${super.cadastroResumo()}\nEstado: ${this.nomeEstado}\nSecretários: ${this.quantidadeSecretarios}`;
  }
}
