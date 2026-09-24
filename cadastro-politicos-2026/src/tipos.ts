export enum Esfera {
  Municipal = "Municipal",
  Estadual = "Estadual",
  Federal = "Federal",
}

export enum Poder {
  Executivo = "Executivo",
  Legislativo = "Legislativo",
  Judiciario = "Judiciário",
}

export interface DadosPolitico {
  nome: string;
  partido: string;
  nomeLocalTrabalho: string;
  enderecoLocalTrabalho: string;
  remuneracao: number;
  projetos: string[];
}
