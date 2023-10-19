import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: 'products/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    // refetchOnFocus: true,
    endpoints: build => ({
        getProductsAll: build.query({
            query:() => ({
                url: '/products'
            })
        }),
        getProductById: build.query({
            query:(id) => ({
                url: `/products/${id}`
            })
        })
    })
})

export const {
    useGetProductsAllQuery,
    useGetProductByIdQuery
} = productsApi
