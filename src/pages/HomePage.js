import React from "react"
import {useGetProductsAllQuery} from "../redux/products/products.api"
import {ProductItem} from "../components/product-item/ProductItem"
import {Loader} from "../components/loader/Loader"
import {ProductFilters} from "../components/product-filters/ProductFilters"
import {useSelector} from "react-redux"

export function HomePage() {
    const { data, error, isLoading, status } = useGetProductsAllQuery()
    const {filters, searchFilterProducts} = useSelector(state => state.product)

    const filterByPrice = price => {
        const products = data?.filter(item => item.price >= price[0] && item.price <= price[1])
            .map(product => <ProductItem product={product} key={product.id} />)
        if (products.length === 0) {
            return <div className='text-center'>
                <p className='font-medium'>Товар не найден...</p>
                <p>Минимальная стоимость 7$ - Максимальная стоимость 1000$</p>
            </div>
        }
        return products
    }

    const filterSearch = data => {
        if (data.length > 0) {
            return data.map(product => <ProductItem product={product} key={product.id}/>)
        } else {
            return <p className='mt-[30px] mx-auto'>Товар не найден...</p>
        }
    }

    const renderProducts = () => {
        if (filters.price) return filterByPrice(filters.price)
        if (searchFilterProducts) return filterSearch(searchFilterProducts)

        return data?.map(product => <ProductItem product={product} key={product.id}/>)
    }

    return (
        <>
            <div className='container mb-[20px] mt-[60px] max-w-[1240px] flex flex-col justify-center items-center xl:flex xl:justify-center xl:flex-row xl:items-start mx-auto transition-all flex-auto'>
                {isLoading && <Loader />}
                {error && <p className='text-center mt-4'>{error.error}</p>}
                {status === 'fulfilled' &&
                    <>
                        <div className='lg:w-3/5 xl:w-1/5 flex flex-col items-center mt-[10px]'>
                            <ProductFilters/>
                        </div>
                        <div className='w-4/5 flex flex-wrap justify-center md:w-full xl:justify-start xl:ml-[20px]'>
                            {renderProducts()}
                        </div>
                    </>
                }
            </div>
        </>
    )
}
