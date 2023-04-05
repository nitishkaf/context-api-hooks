const { default: axios } = require('axios');
const { useState, useEffect } = require('react');

const useFetch = (url, { method }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let x;

  switch (method) {
    case "GET":
      x = axios.get(url)
      break;
    case "POST":
      x = axios.post(url)
      break;
    default:
      x = axios.get(url)
  }

  useEffect(() => {
    axios.get(url).then((response) => {
      setFetchedData(response.data)
      setIsLoading(false);
    }).catch((error) => {
      setError(error)
    })
  }, [])


  return [fetchedData, isLoading, error];
}

export default useFetch;
