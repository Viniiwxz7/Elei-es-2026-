import { Politico } from "./Politico";
import { DadosPolitico, Esfera, Poder } from "./tipos";

export class Presidente extends Politico {
  private _quantidadeMinistros: number;

  constructor(dados: DadosPolitico, quantidadeMinistros: number) {
    super(dados, Esfera.Federal, Poder.Executivo);
    this._quantidadeMinistros = quantidadeMinistros;
  }

  get quantidadeMinistros(): number {
    return this._quantidadeMinistros;
  }
  set quantidadeMinistros(valor: number) {
    if (valor < 0) throw new Error("Quantidade de ministros inválida.");
    this._quantidadeMinistros = valor;
  }

  exercerMandato(): void {
    console.log(
      `[Mandato de ${this.nome}] Propõe, sanciona e veta leis e edita medidas provisórias.`
    );
  }

  nomearExonerarMinistros(): string {
    return "Nomear e exonerar Ministros de Estado.";
  }

  comandarForcasArmadas(): string {
    return "Comandar as Forças Armadas.";
  }

  representarPaisInternacionalmente(): string {
    return "Representar o país em eventos internacionais.";
  }

  elaborarEnviarOrcamentoNacional(): string {
    return "Elaborar e enviar ao Congresso o Plano Plurianual nacional (PPA), a Lei de Diretrizes Orçamentárias nacional (LDO) e a proposta de Lei Orçamentária Anual nacional (LOA).";
  }

  listarAcoes(): string[] {
    return [
      this.nomearExonerarMinistros(),
      this.comandarForcasArmadas(),
      this.representarPaisInternacionalmente(),
      this.elaborarEnviarOrcamentoNacional(),
    ];
  }

  override cadastroResumo(): string {
    return `${super.cadastroResumo()}\nMinistros de Estado: ${this.quantidadeMinistros}`;
  }
}
