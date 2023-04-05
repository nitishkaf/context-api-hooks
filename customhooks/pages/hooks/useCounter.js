const { useState } = require('react')

export function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }
  return {
    count,
    increment,
    decrement,
  }
}
