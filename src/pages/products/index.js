import React from 'react'

import Styles from './index.module.scss'

import Filter from './components/Filter'
import ProductsTable from './components/ProductsTable'
import Pagination from './components/Pagination'

function Products() {
  return (
    <div className={Styles.products} >
        <Filter/>
        <ProductsTable/>
        <Pagination/>
    </div>
  )
}

export default Products