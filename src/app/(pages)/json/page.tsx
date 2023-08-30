import { mwongess } from '@/data/mwongess'
import React from 'react'

const RawData = () => {
    return (
        <div>{JSON.stringify(mwongess, null, 4)}</div>
    )
}

export default RawData