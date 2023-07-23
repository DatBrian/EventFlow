class EventoEntity{
    constructor(
        public description: string,
        public capacity: number,
        public fee: number,
        public ubicacion: number,
        public date: string,
        public category: number
    ){}
}
export default EventoEntity;