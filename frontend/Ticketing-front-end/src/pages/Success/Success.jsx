import "./Style.css"
import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Success() {


    return (
        <>
            <div className="page1">
                <Header />

                <h1 className="p-2 py-6 justify-center align-middle font-thin">Registrado com sucesso!</h1>
                
                <Footer />
            </div>
        </>
    )
}