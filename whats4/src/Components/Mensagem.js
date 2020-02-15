import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const Main = styled.div`
    border: 1px solid black;
    width: 70%;
    height: 100vh;
    margin: auto;
    display:flex;
    flex-direction: column-reverse;
    background-color: #e5dcd5;
`
const LogContainer = styled.div`
    margin: 10px;
`

const EntradaDeMensagem = styled.input`
    width: 60%;
    border-radius: 5px;
`

const EntradaDeNome = styled.input`
    width: 20%;
    border-radius: 5px;
`

const Botao = styled.button`
    border-radius: 5px;
    font-weight: bold;
`

const ContainerEntrada = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 10px;
`
const ParagrafoPost = styled.p`
    padding: 10px 15px;
    max-width: 45%;
    background-color: white;
    display:flex;
    flex-direction:column;
    border-radius: 5px;

`

class Mensagem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: "",
            mensagem: "",
            log: []
        }
    }

    onChangeInputUsuario = event => {
        this.setState({ usuario: event.target.value });
    };
    onChangeInputMensagem = event => {
        this.setState({ mensagem: event.target.value });
    };

    mostrarLog = () => {
        this.state.log.map(element => {
            return (
                console.log(element.usuario + " " + element.mensagem)
            )
        });
    }

    onClickEnviar = () => {
        this.logMensagem();
        this.setState({
            mensagem: ""
        })
    }
    aoApertarEnter = event => {
        const code = event.which;
        if (code === 13) {
            this.onClickEnviar();
        }
    }




    logMensagem = () => {
        const newLog = {
            usuario: this.state.usuario,
            mensagem: this.state.mensagem
        }
        const newLogList = [...this.state.log, newLog];
        this.setState({
            log: newLogList,
            mensagem: "",
            newLog: false
        })
    }

    render() {

        this.mostrarLog();
        return (

            <Main>

                <ContainerEntrada>

                    <EntradaDeNome
                        type="text"
                        className="nome-usuario"
                        placeholder="Nome"
                        onChange={this.onChangeInputUsuario}
                    />
                    <EntradaDeMensagem
                        type="text"
                        className="mensagem"
                        onChange={this.onChangeInputMensagem}
                        placeholder="Mensagem"
                        value={this.state.mensagem}
                        onKeyPress={this.aoApertarEnter}

                    />
                    <Botao
                        className="enviar"
                        onClick={this.onClickEnviar}>Enviar
                        </Botao>

                </ContainerEntrada>
                <LogContainer>
                    {this.state.log.map((mensagem) =>
                        <ParagrafoPost>
                            <strong>{mensagem.usuario}</strong>  {mensagem.mensagem}
                        </ParagrafoPost>
                    )}
                </LogContainer>

            </Main>
        )
    }
}



// proptypes
Mensagem.propTypes = {
    nome: PropTypes.string.isRequired,
    mensagem: PropTypes.string.isRequired
}

export default Mensagem