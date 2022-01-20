import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "175543cd42msh8185be4d5aff10bp16d682jsn37db33d9d376",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    basQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:() => createRequest('/exchanges')
        })
    })
})