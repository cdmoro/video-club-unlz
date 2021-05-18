class User {
  constructor({ mail = "", nombre, tipo = 0, username, imgUrl } = {}) {
    this.username = username;
    this.mail = mail;
    this.nombre = nombre;
    this.tipo = tipo;
    this.imgUrl = imgUrl;
  }
}

export default User;
