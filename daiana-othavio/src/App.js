import './App.css';
import Nome from './components/nome';
import Carros from './components/carro';
import Motos from './components/moto';
import Horario from './components/horario';

function App() {
  return (
    <div className="App">
      <Horario/>
      <Nome />
      <Carros
        placa = "EEJ345"
        chassi = "32907fd9874"
        cor = "Branco"
        porta = "4"
        modelo = "Civic"
        marca = "Honda"
      />
      <Motos
        placa = "EJ39I2"
        chassi = "78098545476"
        cor = "Vermelho"
        modelo = "CB-300F"
        marca = "Honda"
      />
    </div>
  );
}

export default App;
