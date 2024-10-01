export async function getStates() {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}

export async function getAllCities() {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}

export async function getCitiesByStateId(stateId: number) {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios?orderBy=nome`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}

export async function getAddressByCep(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}
