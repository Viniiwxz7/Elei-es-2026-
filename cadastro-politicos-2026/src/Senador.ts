import { Politico } from "./Politico";
import { DadosPolitico, Esfera, Poder } from "./tipos";

export class Senador extends Politico {
  private _nomeEstado: string;
  private _anoEleito: number;

  constructor(dados: DadosPolitico, nomeEstado: string, anoEleito: number) {
    super(dados, Esfera.Federal, Poder.Legislativo);
    this._nomeEstado = nomeEstado;
    this._anoEleito = anoEleito;
  }

  get nomeEstado(): string {
    return this._nomeEstado;
  }

  get anoEleito(): number {
    return this._anoEleito;
  }

  exercerMandato(): void {
    console.log(
      `[Mandato de ${this.nome} - ${this.nomeEstado}] Sabatina e aprova ministros do STF, Procurador-Geral da República e presidentes do Banco Central; legisla sobre leis federais e autoriza operações financeiras externas.`
    );
  }

  aprovarAutoridadesAltoEscalao(): string {
    return "Aprovar autoridades de alto escalão.";
  }

  julgarCrimesResponsabilidade(): string {
    return "Julgar crimes de responsabilidade.";
  }

  representarInteressesEstado(): string {
    return `Representar os interesses do Estado de ${this.nomeEstado}.`;
  }

  listarAcoes(): string[] {
    return [
      this.aprovarAutoridadesAltoEscalao(),
      this.julgarCrimesResponsabilidade(),
      this.representarInteressesEstado(),
    ];
  }

  override cadastroResumo(): string {
    return `${super.cadastroResumo()}\nEstado: ${this.nomeEstado}\nAno em que foi eleito: ${this.anoEleito}`;
  }
}
