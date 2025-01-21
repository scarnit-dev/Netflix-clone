import React, { Suspense } from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Loading from '../Loading'

const RootLayout = () => {
  return (
    <div>
        <Header/>
        <Suspense fallback={<Loading/>}>
        <Outlet/>
        </Suspense>
    </div>
  )
}

export default RootLayout