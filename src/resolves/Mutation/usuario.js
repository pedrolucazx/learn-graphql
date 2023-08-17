import { incrementar, usuariosMock } from "../../data/db.js";

export function indiceUsuario(filtro) {
  if (!filtro) return -1;
  const { id, email } = filtro;
  if (id) return usuariosMock.findIndex((u) => u.id === id);
  if (email) return usuariosMock.findIndex((u) => u.email === email);
  return -1;
}

export const usuario = {
  novoUsuario(_, { dados }) {
    const emailValidator = usuariosMock.some((u) => u.email === dados.email);
    if (emailValidator) throw new Error("Email cadastrado");

    const novo = {
      id: incrementar(),
      ...dados,
      perfil_id: 1,
      status: "ATIVO",
    };

    usuariosMock.push(novo);
    return novo;
  },
  excluirUsuario(_, { filtro }) {
    const index = indiceUsuario(filtro);
    if (index === -1) return null;
    const [excluido] = usuariosMock.splice(index, 1);
    return excluido;
  },

  alterarUsuario(_, { filtro, dados }) {
    const index = indiceUsuario(filtro);
    if (index === -1) return null;
    const usuario = {
      ...usuariosMock[index],
      ...dados,
    };
    usuariosMock.splice(index, 1, usuario);
    return usuario;
  },
};
