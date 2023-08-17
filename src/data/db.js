let contador = 1;

export const perfisMock = [
  { id: 1, nome: "Comum" },
  { id: 2, nome: "Administrador" },
];

export const incrementar = () => contador++;

export const usuariosMock = Array.from({ length: 3 }, (_, index) => {
  const statusOptions = ["ATIVO", "BLOQUEADO", "INATIVO"];
  const randomStatusIndex = Math.floor(Math.random() * statusOptions.length);

  return {
    id: incrementar(),
    nome: `Pedro ${index + 1}`,
    email: `pedro${index + 1}@mail.com`,
    idade: 20 + index,
    perfil_id: (index + 1) % 2 === 0 ? 1 : 2,
    status: statusOptions[randomStatusIndex],
  };
});
