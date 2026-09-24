import { Politico } from "./Politico";
import { DadosPolitico, Esfera, Poder } from "./tipos";

export class DeputadoEstadual extends Politico {
  private _nomeEstado: string;
  private _comissoes: string[];

  constructor(dados: DadosPolitico, nomeEstado: string, comissoes: string[]) {
    super(dados, Esfera.Estadual, Poder.Legislativo);
    if (comissoes.length < 1) {
      throw new Error("O deputado estadual deve participar de ao menos uma comissão.");
    }
    this._nomeEstado = nomeEstado;
    this._comissoes = [...comissoes];
  }

  get nomeEstado(): string {
    return this._nomeEstado;
  }

  get comissoes(): readonly string[] {
    return this._comissoes;
  }

  adicionarComissao(comissao: string): void {
    if (!comissao.trim()) throw new Error("Nome da comissão inválido.");
    this._comissoes.push(comissao);
  }

  exercerMandato(): void {
    console.log(
      `[Mandato de ${this.nome} - ${this.nomeEstado}] Legisla sobre assuntos de interesse do Estado e fiscaliza o governador.`
    );
  }

  votarPpaLoaLdoEstadual(): string {
    return `Votar a PPA, a LOA e a LDO do Estado de ${this.nomeEstado}.`;
  }

  proporEmendasConstituicaoEstadual(): string {
    return `Propor emendas à Constituição estadual de ${this.nomeEstado}.`;
  }

  criarCpiEstadual(): string {
    return `Criar CPI estadual (Comissão Parlamentar de Inquérito) em ${this.nomeEstado}.`;
  }

  listarAcoes(): string[] {
    return [
      this.votarPpaLoaLdoEstadual(),
      this.proporEmendasConstituicaoEstadual(),
      this.criarCpiEstadual(),
    ];
  }

  override cadastroResumo(): string {
    return `${super.cadastroResumo()}\nEstado: ${this.nomeEstado}\nComissões: ${this.comissoes.join("; ")}`;
  }
}
