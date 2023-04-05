import { DataContext } from '@/context/Provider'
import React, { useContext } from 'react'

const SecondComponent = () => {
  const name = useContext(DataContext)
  return (
    <div>{name.age}</div>
  )
}

export default SecondComponent
