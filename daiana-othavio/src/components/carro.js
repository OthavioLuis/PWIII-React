import './carro.css';

function Carros({placa, chassi, cor, porta, modelo, marca}) {
    return(
        <div id='carro'>
            <h2>Dados do Carro:</h2>
            <p>Placa: {placa}</p>
            <p>Chassi: {chassi}</p>
            <p>Cor: {cor}</p>
            <p>Porta: {porta}</p>
            <p>Modelo: {modelo}</p>
            <p>Marca: {marca}</p>
        </div>
    )
}

export default Carros;