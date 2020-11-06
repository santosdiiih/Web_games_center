const CHAVE_USUARIO = "@usuario";

export const signIn = (usuario) =>{
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

export const signOut = () =>{
    localStorage.clear();
}

export const getUsuario = () =>{
    const {usuario} = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return usuario;
}

export const isSignedIn = () =>{
    const usuario = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return usuario ? true : false;
}