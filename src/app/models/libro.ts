export class Libro {
    public titulo : String
    public tipo : String
    public autor : String
    public precio : Number
    public photo : String
    public id_libro : Number
    public id_usuario : Number

    constructor (titulo : String, tipo : String, autor : String,
        precio : Number, photo : String, id_libro : Number = 0,
        id_usuario : Number = 0)
        {
            this.titulo = titulo;
            this.tipo = tipo;
            this.autor = autor;
            this.precio = precio;
            this.photo = photo;
            this.id_usuario = id_usuario;
            this.id_libro = id_libro;
        }
}
