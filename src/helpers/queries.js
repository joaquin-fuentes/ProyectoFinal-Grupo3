const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO
const URL_USUARIO = import.meta.env.VITE_API_USUARIO
const URL_PEDIDO = import.meta.env.VITE_API_PEDIDO

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_USUARIO);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return "";
      }
    } else {
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

  export const consultaCrearUsuario = async (usuario) => {
    try {
      const { isAdmin, ...usuarioSinAdmin } = usuario;
      const respuesta = await fetch(URL_USUARIO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioSinAdmin),
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
export const borrarUsuario = async (id) => {
    try {
        const respuesta = await fetch(`${URL_USUARIO}/${id}`,{
            method: "DELETE"
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}
export const borrarPedido = async (id) => {
    try {
        const respuesta = await fetch(`${URL_PEDIDO}/${id}`,{
            method: "DELETE"
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProductos = async()=>{
  try {
      const respuesta = await fetch(URL_PRODUCTO)
      const listaProductos = await respuesta.json();
      return listaProductos;
  } catch (error) {
      console.log(error);
  }
}

export const obtenerProducto = async(id)=>{
  try {
      const respuesta = await fetch(`${URL_PRODUCTO}/${id}`)
      const producto = await respuesta.json();
      return producto;
  } catch (error) {
      console.log(error);
  }
}
