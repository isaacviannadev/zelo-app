export type State = {
  id: number;
  sigla: string;
  nome: string;
  regiao: Region;
};

export type Region = {
  id: number;
  sigla: string;
  nome: string;
};

export type City = {
  id: number;
  nome: string;
  microrregiao: MicroRegion;
  'regiao-imediata': ImediateRegion;
};

export type MicroRegion = {
  id: number;
  nome: string;
  mesorregiao: MesoRegion;
};

export type MesoRegion = {
  id: number;
  nome: string;
  UF: State;
};

export type ImediateRegion = {
  id: number;
  nome: string;
  'regiao-intermediaria': MesoRegion;
};

export type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};
