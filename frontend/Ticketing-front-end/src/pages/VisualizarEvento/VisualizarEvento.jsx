import "./Style.css"
import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function VisualizarEvento() {

    const [eventos, setEventos] = useState(
        [{
            id: 1,
            nome: 'Teste',
            preco: '1,99',
            endereco: 'Rua dos Bobos, nº0 Goiânia - GO',
            data: new Date(Date.UTC(2024, 3, 22, 19, 30))
        }]
    );

    const objHeaders =
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {

        fetch('http://localhost:8090/api/evento/all', objHeaders)
            .then(response => {
                response.json().then((data) => {
                    setEventos(data)
                    return data
                })
            })
            .catch((e) => {
                console.log('erro! ', e)
            });

    }, [])

    return (
        <>
            <div className="page1">
                <Header />


                <h1 className="p-2 py-6 justify-center align-middle font-thin">Lista de Eventos</h1>
                {eventos.map((evento, idx) => {
                    const eid = evento.id.toString()
                    return (
                        <div key={idx} className="border border-r-0 border-l-0 border-t-0 p-4 px-12">
                            <div className="detalhesEvento">
                                <div className="detalhes">
                                    <label className="tituloEvento">{evento.nome} id:{eid.slice(0, 10)}</label>
                                    <div className="eventoTexto"><label className="textoEvento">
                                        <FaLocationDot className="icon" />  Endereço do Evento: {evento.endereco}</label></div>
                                    <div className="eventoTexto"><label className="textoEvento">
                                        <FaCalendarAlt className="icon" />  Data do Evento: {new Intl.DateTimeFormat(
                                            'pt-BR', {
                                            dateStyle: 'short',
                                            timeStyle: 'short'
                                        }).format(evento.data)}</label></div>
                                </div>
                                <div className="comprarIngresso">
                                    <label className="preco">Ingressos a partir de R$ {evento.preco}</label>
                                    <div><button className="botaoComprar">
                                        <a href="comprar">
                                            Comprar
                                        </a>
                                    </button></div>
                                </div>
                            </div>
                            <div className="descricaoEvento">
                                <label className="tituloEvento">Descrição Completa</label>
                                <label className="descricao"> <p>Lorem ipsum dolor sit amet. Ad possimus aliquid aut cupiditate laborum </p>
                                </label>
                            </div>
                        </div>
                    )
                })}
                <Footer />
            </div>
        </>
    )
}