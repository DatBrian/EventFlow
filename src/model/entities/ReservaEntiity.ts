class ReservaEntity{
    constructor(
        public evento: number,
        public usuario: number,
        public fecha: string,
        public estado: number,
        public tickets: number
    ){}
}
export default ReservaEntity;