import { Header, Footer } from '../../components';
import React, { useState } from 'react';
import "./RegStyle.css"

export default function RegistrarEvento() {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aqui você pode enviar os dados do formulário (incluindo a imagem) para o servidor
        console.log('Dados do evento:', {
            nomeEvento: event.target.nomeEvento.value,
            tipoEvento: event.target.tipoEvento.value,
            // ... outros campos
            imagem: selectedFile,
        });
    };

  return (
    <div className="pagR">
      <Header/>
        <div className="pag01">
            <div className="pag02">
                <div className="pag03">
                    <form onSubmit={handleSubmit}>
                        <label>Informações do Evento</label>
                        <div className="pag04">
                            <div className="t05">
                                <h1>Nome do Evento</h1>
                                <input className="w-96 mr-16" type="text"/>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Tipo do Evento</h1>
                                <select className="w-32">
                                    <option>Shows</option>
                                    <option>Palestras</option>
                                    <option>Filmes</option>
                                    <option>Seminários</option>
                                </select>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Data Evento</h1>
                                <input className="w-32" type="date"/>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Hora Inicio</h1>
                                <input className="w-24" type="time"/>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Hora Fim</h1>
                                <input className="w-24" type="time"></input>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Capacidade</h1>
                                <input className="w-24" type="number"/>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Preço</h1>
                                <input className="w-24" type="number"/>
                            </div>
                            <div className="t05">
                                <h1 className="mr-16">Endereço do Evento</h1>
                                <input className="w-96" type="text"/>
                            </div>
                            <div className="mt-10">
                                <h1>Adicione uma imagem</h1>
                                <input type="file" onChange={handleFileChange} accept="image/*"/>
                            </div>
                        </div>
                        <div className="bt01">
                            <button className="botaoR" type="submit">Registrar Evento</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}