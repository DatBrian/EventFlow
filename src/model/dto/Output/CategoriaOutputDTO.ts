import { Expose } from "class-transformer";

class CategoriaOutputDTO {
    @Expose({ name: "nombre" })
    public name;

    @Expose({ name: "descripcion" })
    public description;

    constructor(
        nombre: string,
        descripcion: string,
    ) {
        this.name = nombre;
        this.description = descripcion;
    }
}
export default CategoriaOutputDTO;