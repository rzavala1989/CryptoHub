import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '8343be924emsh90649f72461b19cp13e705jsnb64faebee1b4',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
// const https = require('https');

// var options = {
//   "method": "GET",
//   "hostname": "rest.coinapi.io",
//   "path": "/v1/exchangerate/BTC/USD",
//   "headers": {'X-CoinAPI-Key': 'A1CE298C-FFF2-4FB7-BE0E-43ABE4107651'}
// };

// var request = https.request(options, function (response) {
//   var chunks = [];
//   response.on("data", function (chunk) {
//     chunks.push(chunk);
//   });
// });

// request.end();
