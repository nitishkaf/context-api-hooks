const { default: FirstComponent } = require('@/components/FirstComponent');
const { default: SecondComponent } = require('@/components/SecondComponent');
const { default: ThirdComponent } = require('@/components/ThirdComponent');
const { DataProvider } = require('@/context/Provider');

// createContext --> Provider --> useContext --> manage the state of your app by sharing data between components
// centralized way to pass data through a component tree
// ContextAPI -> Authentication

// useState, useEffect, useContext / createContext

// custom Hooks -- ?

// Top level component
function Home() {
  return (
    <div>
      <DataProvider>
        <FirstComponent />
        <SecondComponent />
      </DataProvider>

    </div>
  )
}

export default Home;




// // props | state
// // props - properties -> a way to component to receive data
// // state - an object that holds some information (data)

// // prop drilling - process of passing props down multiple levels of component

// export default function Home() {
//   const data = {
//     name: 'John Doe',
//     age: 30,
//   }

//   return (
//     <>
//       <ThirdComponent data={data} />
//     </>
//   )
// }

// function ThirdComponent({ data }) {
//   return (
//     <div>
//       <SecondComponent data={data} />
//     </div>
//   )
// }

// function SecondComponent({ data }) {
//   return (
//     <div>
//       <p>{data.name}</p>
//       <AnotherComponent data={data} />
//     </div>
//   )
// }

// function AnotherComponent({ data }) {
//   return (
//     <div>
//       Name: {data.name}
//       Age: {data.age}
//     </div>
//   )
// }


// Context API -> it is way to share data across diff components
// alternative to prop drilling
// allows data to be shared without having to pass props manually

