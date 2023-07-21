class EventoEntity{
    constructor(
        public description: string,
        public capacity: number,
        public fee: number,
        public ubicacion: string,
        public date: string,
        public category: string
    ){}
}
export default EventoEntity;