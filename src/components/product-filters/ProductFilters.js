import React, {useState} from "react"
import {Price} from "./Price"

export function ProductFilters() {
    const [toggleFilters, setToggleFilters] = useState(false)

    const toggleFiltersBtn = () => {
        setToggleFilters(prev => !prev)
    }

    return (
        <>
            <button className='block border px-4 border-black font-medium py-1 mb-2 xl:hidden' onClick={toggleFiltersBtn}>Фильтр</button>
            <div className={`${toggleFilters ? 'lg:flex lg:justify-between lg:w-full' : 'hidden'}  xl:block`}>
                <div className='w-full mt-[20px] border-b pb-[15px]'>
                    <p className='pb-[20px] text-lg font-medium'>Price</p>
                    <Price />
                </div>
            </div>
        </>
    )
}
