'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://zeloclub.corex.tec.br/',
  cache: new InMemoryCache(),
});

export default client;
