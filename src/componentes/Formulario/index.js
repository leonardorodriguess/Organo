import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Programação', 
        'Front-End',
        'Data Scence',
        'Devops',
        'UX Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto label="Nome" placeholder = "Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder = "Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem"/>
                <CampoTexto label="Time" placeholder = "Digite o seu time"/>
                <ListaSuspensa label = "Time" itens = {times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario