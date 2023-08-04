import foto from '../assets/foto.jpeg';
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header/>
    <h1>Estamos Online</h1>
    <img src={foto}></img>
    
    </div>
  )
}

export default Home