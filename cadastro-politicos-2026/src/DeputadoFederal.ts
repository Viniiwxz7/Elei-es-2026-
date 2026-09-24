import { Politico } from "./Politico";
import { DadosPolitico, Esfera, Poder } from "./tipos";

export class DeputadoFederal extends Politico {
  private _bancada: string;

  constructor(dados: DadosPolitico, bancada: string) {
    super(dados, Esfera.Federal, Poder.Legislativo);
    this._bancada = bancada;
  }

  get bancada(): string {
    return this._bancada;
  }
  set bancada(valor: string) {
    if (!valor.trim()) throw new Error("Bancada não pode ser vazia.");
    this._bancada = valor;
  }

  exercerMandato(): void {
    console.log(
      `[Mandato de ${this.nome}] Legisla sobre o Código Penal, o Código Tributário e as leis trabalhistas, e fiscaliza o Presidente da República.`
    );
  }

  votarPecs(): string {
    return "Votar PECs (Proposta de Emenda à Constituição Federal).";
  }

  criarCpiNacional(): string {
    return "Criar CPI nacional (Comissão Parlamentar de Inquérito).";
  }

  votarOrcamentoNacional(): string {
    return "Votar PPA, LDO e LOA nacionais.";
  }

  proporLeisComplementares(): string {
    return "Propor leis complementares.";
  }

  listarAcoes(): string[] {
    return [
      this.votarPecs(),
      this.criarCpiNacional(),
      this.votarOrcamentoNacional(),
      this.proporLeisComplementares(),
    ];
  }

  override cadastroResumo(): string {
    return `${super.cadastroResumo()}\nBancada: ${this.bancada}`;
  }
}
