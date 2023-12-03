import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphClient = new ApolloClient({
  uri: `${import.meta.env.VITE_API_GRAPH_URI}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export default graphClient;
