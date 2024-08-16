import Navbar from "./components/Navbar";
import Header from "./components/header";
import "./index.css"; 


function App() {
  return (
    <div className="font-sans box-border bg-zinc-100 relative">
      <Navbar />
      {/* Ajuste temporal para el margen superior */}
      <div style={{ marginTop: "-95px" }}>
      <Header/>
      </div>
    </div>
  );
}

export default App;
