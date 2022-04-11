import React from 'react'
import { Develop } from '../helpers/interfaces'

interface Props {
    developer: Develop;
}

export const DevCard = ({ developer }: Props) => {
    return (
        <>
            <div className="card mb-3">
                <h3 className="card-header">{developer.nombre}</h3>
                <div className="card-body">
                    <h5 className="card-title">Puesto</h5>
                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                </div>

                <img
                        className="col-sm-6"
                        style={{width: '100%'}}
                        src={developer.foto}
                        alt="Card cap"
                    />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Carne: {developer.carnet}</li>
                    <li className="list-group-item">Curso: Redes 2</li>
                </ul>

                {/* <div className="card-footer text-muted">
                    2 days ago
                </div> */}
            </div>

        </>
    )
}
