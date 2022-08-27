import React, { useState, useRef } from "react"

//componente criado para exibir um alert
import Mensagem from './Componentes/Mensagem'

import Rodape from './Componentes/Rodape'

import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faList, faPhoneVolume, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'




export default function App() {



    //states


    let [listaContatos, setListaContatos] = useState([])
    let [contato, setContato] = useState({ id: '', nome: '', telefone: '' })


    let [ShowMensagem, setShomMensagem] = useState(0) //state que controla a mensagem de contato duplicado

    //refs
    const inputNome = useRef()
    let idContato = useRef(0)

    //metodos
    function definirNome(e) {

        setShomMensagem(0)//Oculta o Componente <Mensagem> caso esteja visivel

        //ja atualiza o id do registro com um incremento
        setContato({ ...contato, id: idContato.current, nome: e.target.value })
    }

    function definirTelefone(e) {
        setShomMensagem(0)//Oculta o Componente <Mensagem> caso esteja visivel
        setContato({ ...contato, telefone: e.target.value })
    }

    //function mostraMensagem(){

    //}


    function adicionar() {


        // validar campos

        //verificar se o imput não esta em branco
        if (contato.nome === '' || contato.telefone === '') { setShomMensagem(1)}//ShowMemsagem =1 torna o Componemte Mensagem visível
        if (contato.nome === '' || contato.telefone === '') return

        //verificar se o contato ja existe
        let duplicado = listaContatos.find((ct) => ct.nome === contato.nome && ct.telefone === contato.telefone)

        console.log(duplicado) //SE NAO ENCONTRAR FICA undefined
        if (typeof duplicado != 'undefined') { setShomMensagem(1) }//ShowMemsagem =1 torna o Componemte Mensagem visível
        if (typeof duplicado != 'undefined') return

        //alert bootstrap



        //add contato caso nenhum input esteja vazio

        setListaContatos([...listaContatos, contato])
        idContato.current++
        console.log(contato)


        // limpar campos
        setContato({ nome: '', telefone: '' })

        //direcionar o focu
        inputNome.current.focus()


    }

    function pressionarEnter(e) {
        if (e.code === 'Enter') { adicionar() }
    }

    //limpar o array lista de contatos

    function limparLista() {
        setListaContatos([])
    }

    //limpa o contato com o id que foi passado
    function removerContato(id) {
        const tmp = listaContatos.filter(ct => ct.id !== id)
        setListaContatos(tmp)

    }

    return (
        <>
            <div className="container-fluid titulo " >
                <div className="row">
                    <div className="col text-center p-1 ">
                        <h3><FontAwesomeIcon icon={faList} /> Lista de Contatos</h3>
                    </div>
                </div>

            </div>





            <div className="container-fluid formulario pd-2">

               

                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4">

                        <div className="mensagem">
                            {ShowMensagem === 1 ? <Mensagem></Mensagem> : null}    {/* Conforme o Valor da Variavel 
                            ShowMensagem exibe ou não o componente <Mensagem> */}
                        </div>

                        <div>
                            <label className="form-label"><h6>Nome</h6></label><br />
                            <input className="form-control" type='text' ref={inputNome} onChange={definirNome} value={contato.nome} />
                        </div>
                        <div>
                            <label className="form-label"><h6>Telefone</h6></label><br />
                            <input className="form-control" type='text' onChange={definirTelefone} onKeyUp={pressionarEnter} value={contato.telefone} />

                            <div className="row mb-2 mt-3">
                                <div className="col text-start">
                                    <button className="btn btn-outline-warning btn-sm" onClick={limparLista}>
                                        <FontAwesomeIcon icon={faTrash} className='me-1' />
                                        Limpar</button>
                                </div>
                                <div className="col text-end">
                                    <button className="btn btn-outline-info btn-sm" onClick={adicionar}>
                                        <FontAwesomeIcon icon={faAdd} className='me-1' />
                                        Adicionar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>






            {listaContatos.map(contato => {
                return <div className="container-fluid registros my-1" key={contato.id}>

                    <div className="row">
                        <div className="col p-2">
                            <FontAwesomeIcon icon={faUser} className='me-3' />
                            {contato.nome}</div>
                        <div className="col p-2">
                            <FontAwesomeIcon icon={faPhoneVolume} className='me-3' />
                            {contato.telefone}</div>
                        <div className='col p-2'>
                            <FontAwesomeIcon
                                className="ms-3"
                                icon={faTrash} onClick={() => removerContato(contato.id)} />

                        </div>
                    </div>
                </div>
            })}

            <Rodape></Rodape>


        </>

    )
}
