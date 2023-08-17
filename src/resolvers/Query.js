import { perfisMock, usuariosMock } from "../data/db.js";
import { indiceUsuario } from "./Mutation/usuario.js";

export const Query = {
  ola() {
    return "Bom Dia!";
  },
  horaAtual() {
    return new Date().toLocaleString();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ana da Web",
      email: "ana@mail.com",
      idade: 23,
      salario_real: 4500,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "PC",
      preco: 8000.0,
      desconto: 0.15,
    };
  },
  numerosMegaSena() {
    return Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 100) + 1
    ).sort((a, b) => a - b);
  },
  usuarios() {
    return usuariosMock;
  },
  usuario(_, { filtro }) {
    const i = indiceUsuario(filtro);
    return usuariosMock[i];
  },
  perfis() {
    return perfisMock;
  },
  perfil(_, { id }) {
    const selecionado = perfisMock.filter((p) => p.id == id);
    return selecionado[0] || null;
  },
};
