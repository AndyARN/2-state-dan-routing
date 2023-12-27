import Navbar from "./components/Navbar";
import Count from "./components/Count";

export default function App() {
  return (
    <>
      <Navbar title="Neuverse">
        <button className="py-2 px-3 bg-blue-300 rounded-lg">Login</button>
      </Navbar>

      <main>
        <Count />
      </main>
    </>
  );
}
