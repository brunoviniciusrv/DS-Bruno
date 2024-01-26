import "./Style.css"
import { Header, Footer} from '../../components';

export default function ComprarIngresso() {
    return (
        <>
        <Header/>
            <div className="nav2">
                <h1>Teste</h1>
            </div>
            <div className="dadosCompra">
                <h3>Dados da Compra</h3>
                <h1>Número do Cartão</h1>
                <input className="box" type="text" pattern="[0-9]*" inputMode="numeric" placeholder="4444 3333 2222 1111"/>
                <h1>Nome no Cartão</h1>
                <input className="box" type="text" placeholder="Rachel Green"/>
                <h1>CPF</h1>
                <input className="box" type="CPF" placeholder="123.456.789-10"/>
                <h1>Data de Nascimento</h1>
                <input className="box" type="date" placeholder="01/01/2001"/>
                <h1>CVV</h1>
                <input className="box" type="tex" placeholder="123"/>
            </div>
            <div className="enderecoCompra">
                <h1>Teste</h1>
            </div>
         <Footer/>
        </>
    )
}