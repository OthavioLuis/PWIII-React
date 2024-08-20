import Validar from "./validar";

function Nome() {
    return(
        <div>
            <h1>Passando parametro</h1>
            <Validar 
                nome = "Daiana"
                idade = "17"
                profissao = "Estudar"
            />
            <Validar 
                nome = "Othavio"
                idade = "19"
                profissao = "Front-End"
            />
        </div>
    )
}

export default Nome;