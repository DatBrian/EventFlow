import { Expose } from "class-transformer";

class CategoriaOutputDTO {
    @Expose({ name: "nombre" })
    public name;

    @Expose({ name: "descipcion" })
    public description;

    constructor(
        nombre: string,
        descipcion: string,
    ) {
        this.name = nombre;
        this.description = descipcion;
    }
}
export default CategoriaOutputDTO;