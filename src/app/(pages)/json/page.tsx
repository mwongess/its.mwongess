import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { mwongess } from '@/data/mwongess'
import React from 'react'

const RawData = () => {
    return (
        <div className=''>
            <Header />
            <p className='px-28 py-4 min-h-screen'>
                {JSON.stringify(mwongess, null, 4)}
            </p>
            <Footer />
        </div>
    )
}

export default RawData