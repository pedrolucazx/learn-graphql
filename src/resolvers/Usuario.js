import { perfisMock } from "../data/db.js";

export const Usuario = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const selecionado = perfisMock.filter((p) => p.id == usuario.perfil_id);
    return selecionado[0] || null;
  },
};
