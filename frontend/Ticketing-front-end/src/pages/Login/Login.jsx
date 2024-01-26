import React from "react";
import "./style.css";

export default function Login() {

    function mascara(e) {
        var i = e.target;
        var v = i.value;

        if (isNaN(v[v.length - 1])) {
            // Impede entrar outro caractere que não seja número
            i.value = v.substring(0, v.length - 1);
            return;
        }

        i.setAttribute("maxLength", "14");
        if (v.length === 3 || v.length === 7) i.value += ".";
        if (v.length === 11) i.value += "-";
    }

    return (
        <div className="page">
            <div className="Login">
                <form className="formularioLogin">
                    <div className="logoLogin">
                        <img src="src/assets/logo.png" alt="Logo"/>
                    </div>
                    <div className="detaLogin">
                        <h1>Digite seu Usuário</h1>
                        <input onInput={mascara} type="text" placeholder="Digite seu CPF"/>
                        <h1>Digite sua Senha</h1>
                        <input type="password" placeholder="Digite sua senha!"/>
                        <button className="botaoLogin">Fazer Login</button>
                        <a className="textoR">Não tem conta? Registre-se!</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
