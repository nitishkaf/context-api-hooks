
import APIComp from './component/API';
import Counter from './component/Counter';
import Second from './component/Second';

export default function Home() {
  return (
    <>
      <Counter />
      <hr />
      {/* <APIComp /> */}
      <Second />
    </>
  )
}

// Custom Hooks

// What are React hooks ?
// functions provided by react | reusuale piece of logic that can be shared among multiple components
// useState, useEffect, useContext, useMemo, etc...

// custom hooks -> create functions --> share logic between functions
// it allows you to extact a logic from a component so that those logic can be used without having to duplicate code.

// Counter -> increment, decrement
