export class Usuario {
  public id: Number;
  public nombre: String;
  public apellidos: String;
  public password: String;
  public correo: String;
  public imagen: String;

  constructor(
      nombre: String = null,
      apellidos: String = null,
      password: String = null,
      correo: String = null,
      imagen: String = null,
      id: Number = -1,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.password = password
    this.correo = correo;
    this.imagen = imagen;
  }
}
