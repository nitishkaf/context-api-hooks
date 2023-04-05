import useFetch from '../hooks/useFetch'

const APIComp = () => {
  const [fetchedData, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" });

  console.log('Data: ', fetchedData, 'isLoading: ', isLoading, 'error: ', error)
  return (
    <div>
      {isLoading ? "Loading..." : fetchedData.map((todo, index) => {
        return <div key={index}>{todo.title}</div>
      })}
    </div>
  )
}

export default APIComp;
