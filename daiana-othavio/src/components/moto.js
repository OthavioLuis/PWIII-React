function Motos({placa, chassi, cor, modelo, marca}) {
    return(
        <div>
            <h2>Dados da Moto:</h2>
            <p>Placa: {placa}</p>
            <p>Chassi: {chassi}</p>
            <p>Cor: {cor}</p>
            <p>Modelo: {modelo}</p>
            <p>Marca: {marca}</p>
        </div>
    )
}

export default Motos;