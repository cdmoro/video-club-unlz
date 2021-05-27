class Usuario {
  constructor({ mail = "", nombre, tipo = 0, username, imgUrl, fechaNacimiento, profesion, password } = {}) {
    this.username = username;
    this.mail = mail;
    this.nombre = nombre;
    this.tipo = tipo;
    this.imgUrl = imgUrl;
    this.fechaNacimiento = fechaNacimiento;
    this.profesion = profesion;
    this.password = password;
  }
}

export default Usuario;
