import { perfil } from "./perfil.js";
import { usuario } from "./usuario.js";

export const Mutation = { ...usuario, ...perfil };
