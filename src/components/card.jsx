import React, { useState } from 'react';


const Card = ({ foto, testo, titolo, id}) => {
    let [numero, aumenta] = useState(0);
    
    const elimina = () => {
        if (numero > 0){
            aumenta(numero - 1);
        }
    }
    return(
        <>
    <div className="card text-center bg-dark " data-bs-theme="dark" style={{width: "18rem",}}>
        <img src={foto} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{titolo}</h5>
            <p className="card-text">{testo}</p>
            <p>{numero}</p>
            <div className='container'>
                <div className="row jusify-content-center">
                    <div className="col-xxl-6 col-sm-12">
                        <button className="btn btn-primary col-5 h-50 t-center" style={{width: "fit-content", minHeight: "fit-content",}}
                        onClick={() => aumenta(numero + 1)}>Aggiungi</button>
                    </div>
                    <div className="col-xxl-6 col-sm-12 mt-1">
                        <button className="btn btn-danger col-5 h-50 t-center" style={{width: "fit-content", minHeight: "fit-content",}} onClick={elimina}>Elimina</button>
                    </div>
                </div>
             </div>
        </div>
    </div>
    </>
    );
}

export default Card;