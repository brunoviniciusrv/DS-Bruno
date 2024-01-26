import { Header, Footer } from '../../components';

export default function RegistrarEvento() {

  function criaEvento(event) {
    const query = event.get("grid-nome")
    console.log('A name was submitted: ' + query);
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <div className="w-full max-w-lg flex m-12 flex-row justify-center place-items-center">
        <form className="flex flex-col rounded-lg border-2 w-full" encType="multipart/form-data" action="http://localhost:8090/api/evento/add/" method="post">
          <div className="py-5 px-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nome">
                  Nome do Evento
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="nome" type="text" placeholder="Ex: UFG Fest" />
              
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nome">
                  ID
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="id" type="text" placeholder="1" />
              
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-tipo">
                  Tipo de Evento
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="tipo">
                    <option>Musical</option>
                    <option>Palestra</option>
                    <option>Hipertexto</option>
                    <option>Feira</option>
                    <option>Mostra</option>
                    <option>Outros</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-data-inicio">
                  Data de Início
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="data-inicio" type="date" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-data-fim">
                  Data de Fim
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="data-fim" type="date" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-hora-inicio">
                  Horário de Início
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="hora-inicio" type="time" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-hora-fim">
                  Horário de Fim
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="hora-fim" type="time" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-lotacao">
                  Lotação Máxima
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lotacao" type="text" />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-preco">
                  Preço
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="preco" type="text" />
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-endereco">
              Endereço do Evento
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="endereco" type="text" placeholder="Ex: Centro de Eventos UFG" />
          </div>
          {/* <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-imagem">
              Imagem do Evento
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="imagem" type="text" />
          </div> */}
          <input type="submit" value="Salvar e Publicar" className="rounded bg-[#36469e] text-white p-2 my-12 px-12 h-12 align-middle justify-center items-center">
          </input>

        </form>

      </div>
        <Footer />
    </>
  )
}