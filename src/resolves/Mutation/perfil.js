import { incrementar, perfisMock } from "../../data/db.js";

export function indicePerfil(filtro) {
  if (!filtro) return -1;
  const { id, nome } = filtro;
  if (id) return perfisMock.findIndex((p) => p.id === id);
  if (nome) return perfisMock.findIndex((p) => p.nome === nome);

  return -1;
}

export const perfil = {
  novoPerfil(_, { dados }) {
    const emailValidator = perfisMock.some((u) => u.nome === dados.nome);
    if (emailValidator) throw new Error("Perfil cadastrado");

    const novo = {
      id: incrementar(),
      ...dados,
      perfil_id: 1,
      status: "ATIVO",
    };

    perfisMock.push(novo);
    return novo;
  },
  excluirPerfil(_, { filtro }) {
    const index = indicePerfil(filtro);
    if (index === -1) return null;
    const [excluido] = perfisMock.splice(index, 1);
    return excluido;
  },

  alterarPerfil(_, { filtro, dados }) {
    console.log(filtro);
    const index = indicePerfil(filtro);
    if (index === -1) return null;
    const usuario = {
      ...perfisMock[index],
      ...dados,
    };
    perfisMock.splice(index, 1, usuario);
    return usuario;
  },
};
