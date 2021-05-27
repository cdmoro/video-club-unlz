import Usuario from "./Usuario";

class UsuarioEmpresa extends Usuario {
  constructor({
    mail = "",
    nombre,
    tipo = 1,
    username,
    imgUrl,
    fechaNacimiento,
    profesion,
    password,
    nombreEmpresa,
    identificacionTributaria,
    rubro,
    fechaInicioActividad,
    responsableMail,
    responsableTelefono,
    responsableCelular,
    formaPago = [],
  } = {}) {
    super({ mail, nombre, tipo, username, imgUrl, fechaNacimiento, profesion, password });
    this.nombreEmpresa = nombreEmpresa;
    this.identificacionTributaria = identificacionTributaria;
    this.rubro = rubro;
    this.fechaInicioActividad = fechaInicioActividad;
    this.responsableMail = responsableMail;
    this.responsableTelefono = responsableTelefono;
    this.responsableCelular = responsableCelular;
    this.formaPago = formaPago;
  }
}

export default UsuarioEmpresa;
