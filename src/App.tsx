import "./App.css";
import "./atomic.css";
import Clock from "./components/clock";

function App() {
  return (
    <div className="w-full flex min-h-screen justify-center items-center p-2 cont-app">
      <Clock />
    </div>
  );
}

export default App;
