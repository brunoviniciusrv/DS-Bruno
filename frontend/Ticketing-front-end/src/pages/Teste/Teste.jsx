import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import "./StyleTeste.css";

export default function Teste() {
    return (
        <div className="pageTeste">
            <Header/>
            <div className="flex items-center justify-center mt-4">
                <div className="imagemVisualizar p-4">
                    <img src="src/assets/splash.png" className="mx-auto h-full w-full max-w-full" alt="Imagem do Evento"/>
                </div>
            </div>
            <div className="testt">
                <div className="descricaoEvento" >
                    <div className="detalhamento">
                        <label className="tipo1">Título do Evento</label>
                        <label className="mt-2 tipo2"><FaLocationDot className="mr-2 icon" />Endereço</label>
                        <label className="mt-2 tipo2"><FaCalendarAlt className="mr-2 icon" />Data</label>
                    </div>
                    <div className="detalheCompra">
                        <div className="textoC">
                            <label>Ingressos a partir de</label>
                            <label>R$ 00,00</label>
                        </div>
                        <button className="buton">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="testt">
                <div className="infoEvento">
                    <label className="tipo1">Informações do Evento</label>
                    <div className="infoEvento2">
                        <label className="tipo3">Digite aqui a descrição do Evento</label>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
