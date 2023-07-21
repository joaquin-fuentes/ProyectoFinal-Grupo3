const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO
const URL_USUARIO = import.meta.env.VITE_API_USUARIO

export const login = async (usuario) => {
    console.log(usuario);
    try {
      const respuesta = await fetch(URL_USUARIO);
      const listaUsuarios = await respuesta.json();
      console.log(listaUsuarios);
      const usuarioBuscado = listaUsuarios.find(
        (itemUsuario) => itemUsuario.email === usuario.email
      );
      if (usuarioBuscado) {
        console.log('Email encontrado');
        if (usuarioBuscado.password === usuario.password) {
          console.log('encontramos al usuario!!!');
          return usuarioBuscado;
        } else {
          console.log('password incorrecto');
          return "";
        }
      } else {
        console.log('email incorrecto');
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  export const crearUsuario = async (usuario) => {
    try {
      const respuesta = await fetch(URL_USUARIO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
export const crearProducto = async (producto) => {
    try {
        const respuesta = await fetch(URL_PRODUCTO,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarProducto = async (id) => {
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`,{
            method: "DELETE"
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}