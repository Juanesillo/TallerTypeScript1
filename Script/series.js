var Serie = /** @class */ (function () {
    function Serie(id, nombre, canal, temporada, resumen,link, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporada = temporada;
        this.resumen= resumen;
        this.link = link;
        this.imagen = imagen;  
    }
    return Serie;
}());
export { Serie };