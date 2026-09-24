import { Presidente } from "./Presidente";
import { Governador } from "./Governador";
import { DeputadoEstadual } from "./DeputadoEstadual";
import { DeputadoFederal } from "./DeputadoFederal";
import { Senador } from "./Senador";
import { Politico } from "./Politico";

const SUBSIDIO_CONGRESSO = 46366.19;
const SUBSIDIO_DEP_ESTADUAL = 34774.64;
const SUBSIDIO_GOV_PE = 22000.0;
const SUBSIDIO_GOV_SP = 36301.53;

function linha(): void {
  console.log("-".repeat(78));
}

function demonstrar(politico: Politico): void {
  linha();
  console.log(politico.cadastroResumo());
  politico.exercerMandato();
  console.log("Ações:");
  politico.listarAcoes().forEach((acao, i) => console.log(`  ${i + 1}. ${acao}`));
}

const presidente = new Presidente(
  {
    nome: "Luiz Inácio Lula da Silva",
    partido: "PT",
    nomeLocalTrabalho: "Palácio do Planalto",
    enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF, 70150-900",
    remuneracao: SUBSIDIO_CONGRESSO,
    projetos: [
      "Novo PAC",
      "Programa de Aceleração do Crescimento Social",
      "Marco da TV 3.0",
    ],
  },
  38
);

const governadoraPE = new Governador(
  {
    nome: "Raquel Lyra",
    partido: "PSD",
    nomeLocalTrabalho: "Palácio do Campo das Princesas",
    enderecoLocalTrabalho: "Praça da República, s/n - Santo Antônio, Recife - PE",
    remuneracao: SUBSIDIO_GOV_PE,
    projetos: [
      "PE na Escola",
      "Pavimentação de rodovias do Agreste",
      "Ampliação do Hospital da Restauração",
    ],
  },
  22,
  "Pernambuco"
);

const governadorSP = new Governador(
  {
    nome: "Tarcísio de Freitas",
    partido: "Republicanos",
    nomeLocalTrabalho: "Palácio dos Bandeirantes",
    enderecoLocalTrabalho: "Av. Morumbi, 4500 - Morumbi, São Paulo - SP",
    remuneracao: SUBSIDIO_GOV_SP,
    projetos: [
      "Expansão das linhas de metrô",
      "Concessão de rodovias estaduais",
      "Programa Morar Bem SP",
    ],
  },
  26,
  "São Paulo"
);

const federaisPE = [
  new DeputadoFederal(
    {
      nome: "Pedro Campos",
      partido: "PSB",
      nomeLocalTrabalho: "Câmara dos Deputados",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Fomento à indústria naval de PE", "Transposição complementar do São Francisco"],
    },
    "Governista"
  ),
  new DeputadoFederal(
    {
      nome: "Clarissa Tércio",
      partido: "PP",
      nomeLocalTrabalho: "Câmara dos Deputados",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Valorização da família", "Segurança pública no Interior"],
    },
    "Conservadora"
  ),
  new DeputadoFederal(
    {
      nome: "Carlos Veras",
      partido: "PT",
      nomeLocalTrabalho: "Câmara dos Deputados",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Reforma agrária no Sertão", "Fortalecimento da agricultura familiar"],
    },
    "Governista"
  ),
];

const federaisSP = [
  new DeputadoFederal(
    {
      nome: "Tabata Amaral",
      partido: "PSB",
      nomeLocalTrabalho: "Câmara dos Deputados",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Fundeb permanente", "Educação em tempo integral"],
    },
    "Educação"
  ),
  new DeputadoFederal(
    {
      nome: "Kim Kataguiri",
      partido: "UNIÃO",
      nomeLocalTrabalho: "Câmara dos Deputados",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Desburocratização tributária", "Controle de gastos públicos"],
    },
    "Liberal"
  ),
];

const estaduaisPE = [
  new DeputadoEstadual(
    {
      nome: "Delegada Gleide Ângelo",
      partido: "PSB",
      nomeLocalTrabalho: "Assembleia Legislativa de Pernambuco",
      enderecoLocalTrabalho: "Edifício Governador Miguel Arraes de Alencar, Rua da União, 397 - Boa Vista, Recife - PE",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Lei de proteção a mulheres", "Reestruturação da Polícia Civil"],
    },
    "Pernambuco",
    ["Comissão de Segurança Pública", "Comissão de Constituição e Justiça"]
  ),
  new DeputadoEstadual(
    {
      nome: "João Paulo",
      partido: "PT",
      nomeLocalTrabalho: "Assembleia Legislativa de Pernambuco",
      enderecoLocalTrabalho: "Edifício Governador Miguel Arraes de Alencar, Rua da União, 397 - Boa Vista, Recife - PE",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Transporte metropolitano", "Habitação popular no Recife"],
    },
    "Pernambuco",
    ["Comissão de Educação", "Comissão de Direitos Humanos"]
  ),
  new DeputadoEstadual(
    {
      nome: "Antônio Coelho",
      partido: "UNIÃO",
      nomeLocalTrabalho: "Assembleia Legislativa de Pernambuco",
      enderecoLocalTrabalho: "Edifício Governador Miguel Arraes de Alencar, Rua da União, 397 - Boa Vista, Recife - PE",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Incentivo ao agronegócio do Sertão", "Saneamento no Agreste"],
    },
    "Pernambuco",
    ["Comissão de Agricultura"]
  ),
];

const estaduaisSP = [
  new DeputadoEstadual(
    {
      nome: "André do Prado",
      partido: "Republicanos",
      nomeLocalTrabalho: "Assembleia Legislativa de São Paulo",
      enderecoLocalTrabalho: "Palácio 9 de Julho, Av. Pedro Álvares Cabral, 201 - Ibirapuera, São Paulo - SP",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Reforma administrativa estadual", "Parcerias público-privadas"],
    },
    "São Paulo",
    ["Comissão de Constituição e Justiça", "Comissão de Finanças e Orçamento"]
  ),
  new DeputadoEstadual(
    {
      nome: "Emídio de Souza",
      partido: "PT",
      nomeLocalTrabalho: "Assembleia Legislativa de São Paulo",
      enderecoLocalTrabalho: "Palácio 9 de Julho, Av. Pedro Álvares Cabral, 201 - Ibirapuera, São Paulo - SP",
      remuneracao: SUBSIDIO_DEP_ESTADUAL,
      projetos: ["Transporte na Região Metropolitana", "Saúde na Grande SP"],
    },
    "São Paulo",
    ["Comissão de Saúde", "Comissão de Transportes"]
  ),
];

const senadores = [
  new Senador(
    {
      nome: "Humberto Costa",
      partido: "PT",
      nomeLocalTrabalho: "Senado Federal",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Mais Médicos permanente", "Fortalecimento do SUS"],
    },
    "Pernambuco",
    2010
  ),
  new Senador(
    {
      nome: "Teresa Leitão",
      partido: "PT",
      nomeLocalTrabalho: "Senado Federal",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Valorização do magistério", "Piso nacional da educação"],
    },
    "Pernambuco",
    2022
  ),
  new Senador(
    {
      nome: "Flávio Bolsonaro",
      partido: "PL",
      nomeLocalTrabalho: "Senado Federal",
      enderecoLocalTrabalho: "Praça dos Três Poderes, Brasília - DF",
      remuneracao: SUBSIDIO_CONGRESSO,
      projetos: ["Redução de impostos", "Segurança nas fronteiras"],
    },
    "Rio de Janeiro",
    2018
  ),
];

console.log("=".repeat(78));
console.log("  SISTEMA DE CADASTRO DE POLÍTICOS — ELEIÇÕES 2026");
console.log("  IFPE Campus Jaboatão dos Guararapes | Programação 2 — POO");
console.log("=".repeat(78));

console.log("\n>>> PRESIDENTE DA REPÚBLICA");
demonstrar(presidente);

console.log("\n>>> GOVERNADORES");
demonstrar(governadoraPE);
demonstrar(governadorSP);

console.log("\n>>> DEPUTADOS FEDERAIS DE PERNAMBUCO");
federaisPE.forEach(demonstrar);

console.log("\n>>> DEPUTADOS FEDERAIS DE SÃO PAULO");
federaisSP.forEach(demonstrar);

console.log("\n>>> DEPUTADOS ESTADUAIS DE PERNAMBUCO");
estaduaisPE.forEach(demonstrar);

console.log("\n>>> DEPUTADOS ESTADUAIS DE SÃO PAULO");
estaduaisSP.forEach(demonstrar);

console.log("\n>>> SENADORES");
senadores.forEach(demonstrar);

console.log("\n");
linha();
console.log("POLIMORFISMO: o mesmo método exercerMandato() se comporta de forma");
console.log("diferente conforme o tipo real do objeto (Presidente, Governador, etc.).");
linha();

const todos: Politico[] = [
  presidente,
  governadoraPE,
  governadorSP,
  ...federaisPE,
  ...federaisSP,
  ...estaduaisPE,
  ...estaduaisSP,
  ...senadores,
];

console.log(`Total de políticos cadastrados: ${todos.length}`);
todos.forEach((p) => {
  console.log(`- ${p.nome} (${p.constructor.name} / ${p.partido} / ${p.esfera})`);
});
