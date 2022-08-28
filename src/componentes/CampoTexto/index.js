import './CampoText.css'

const CampoTexto = (props) =>{

    const placeholder = `${props.placeholder} ...`;

    let valor = 'Leonardo';

    const aoDigitado = (evento) => {
        valor = evento.target.value;
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto