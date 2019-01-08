export class Menu {
    constructor(
        public nombre: string,
        public seccion: string
        ) {
    }
} 

export class Contencarrusel {
    constructor(
        public textoPrincipal: string,
        public palabraColoreada: string,
        public bg: string
        ) {
    }
}

export class Tecnologias {
    constructor(
        public icono: string,
        public nombre: string,
        public status: string,
        public porcentaje: string,
        public color: string
        ) {
    }
}

export class Pasos {
    constructor(
        public nunPaso: string,
        public titulo: string,
        public descripcion: string
        ) {
    }
}

export class ServiciosInfo {
    constructor(
        public nombre: string,
        public descripcion: string,
        public icono: string,
        public urlServicio: string
        ) {
    }
}