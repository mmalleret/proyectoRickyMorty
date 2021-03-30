import Navbar from './Components/Navbar.js'
import Content from './Components/Content.js'
function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Navbar/>
        <Content/>
        <footer>
          <div className="footer-container">
          <span>Copyright &copy; Rick and Morty</span> 
          <p> Practica integradora Malleret </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;