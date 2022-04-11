import React from 'react'
import { Admin } from '../helpers/interfaces'

interface Props {
    admin: Admin
}

export const AdminCard = ({ admin }: Props) => {
    return (
        <>
            <div className="card mb-3">
                <h3 className="card-header">{admin.nombre}</h3>
                <div className="card-body">
                    <h5 className="card-title">{admin.puesto}</h5>
                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                </div>
                <img
                        className="col-sm-6"
                        style={{width: '100%'}}
                        src={admin.foto}
                        alt="Card cap"
                    />
                <div className="card-body">
                    <p className="card-text">{admin.descripcion}</p>
                    
                </div>
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul> */}
                {/* <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div> */}
                {/* <div className="card-footer text-muted">
                    2 days ago
                </div> */}
            </div>
        </>
    )
}
