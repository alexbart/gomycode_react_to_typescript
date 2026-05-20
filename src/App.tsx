import Counter from "./components/Counter"
import Greeting from "./components/Greeting"


function App() {

  return (
    <>
      <div>

        {/* Greeting component */}
        <Greeting name="Alex" />

        {/* Counter component */}
        <Counter />

      </div>
    </>
  )
}

export default App
