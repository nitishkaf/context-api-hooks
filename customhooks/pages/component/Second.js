import React from 'react'
import useFetch from '../hooks/useFetch';

const Second = () => {
  const [fetchedData, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" });
  return (
    <div>{JSON.stringify(fetchedData)}</div>
  )
}

export default Second
