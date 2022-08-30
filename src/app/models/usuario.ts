export class Usuario {
    public id : Number;
    public nombre : String;
    public apellidos : String;
    public correo : String;
    public imagen : String;

    constructor(id:Number = -1, nombre : String = null, apellidos : String = null,
        correo : String = null, imagen : String = null) 
        {
            this.id = id;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.correo = correo;
            this.imagen = imagen;
        }
    

    
}
