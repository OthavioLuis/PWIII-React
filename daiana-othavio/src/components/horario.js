import './horario.css';

function Horario() {

    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getUTCMinutes()

    return(
        <div id='horario'>
            <button onclick="window.location.reload()">Clique para atualizar o Horário</button>
            <h1>{hora}:{minuto}</h1>
        </div>
    )
}

export default Horario;