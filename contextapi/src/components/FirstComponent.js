import { DataContext } from '@/context/Provider'
import React, { useContext } from 'react'

// display name here
const FirstComponent = () => {
  const data = useContext(DataContext)
  return (
    <div>{data.name}</div>
  )
}

export default FirstComponent
