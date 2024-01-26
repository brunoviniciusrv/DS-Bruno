import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";

export default function Shows() {
    return (
        <div className="ShowsPage">
            <Header/>
            <div>
                <div className="eventoPro flex-wrap">
                    <div className="evento1">
                        <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png" alt="Evento 1" /></div>
                        <div className="descricao">
                            <div className="texDes">
                                <div className="ml-4 mes-dia">
                                    <label className="mes">Mês</label>
                                    <label className="mes">Dia</label>
                                </div>
                                <label className="ml-16 nome">Nome Evento</label>
                                <label className="ml-4 preco">Preço</label>
                                <div className="location">
                                    <FaLocationDot className="ml-12" /><label className="ml-1 preco">Local</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}