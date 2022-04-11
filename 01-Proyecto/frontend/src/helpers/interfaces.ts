
// --------  --------

export interface AdminResponse {
    status: boolean;
    admin:  Admin[];
}

export interface Admin {
    administradorId: number;
    nombre:          string;
    descripcion:     string;
    puesto:          string;
    foto:            string;
    createdAt:       null;
    updatedAt:       null;
}


// --------  --------

export interface DevlopResponse {
    status:  boolean;
    develop: Develop[];
}

export interface Develop {
    desarrolladorId: number;
    nombre:          string;
    carnet:          number;
    foto:            string;
    createdAt:       null;
    updatedAt:       null;
}


