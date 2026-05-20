// Import components
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-10 p-6">
      {/* Greeting component */}
      <Greeting name="John Doe" />
      {/* Counter component */}
      <Greeting name="Alex Kiprop" />
      <Counter />


    </div>
  );
}

export default App;