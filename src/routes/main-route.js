// import {lazy} from 'react'

import MainLayout from '../layouts/main'

import Home from '../pages/home'
import Products from '../pages/products'

const MainRoute = {
    path:'/',
    element: <MainLayout/>,
    children:[
        {
            path: '/',
            element: < Home/>
        },
        {
            path: 'products',
            element: < Products/>
        }
    ]
}

export default MainRoute

