import Usuario from "./Usuario";

class UsuarioAdministrador extends Usuario{
    constructor({ mail = "", nombre, tipo = 2, username, imgUrl } = {}) {
        super({ mail, nombre, tipo, username, imgUrl});
    }
  }
  
  export default UsuarioAdministrador;
  