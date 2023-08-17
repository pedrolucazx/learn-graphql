import { Mutation } from "./Mutation/index.js";
import { Produto } from "./Produto.js";
import { Query } from "./Query.js";
import { Usuario } from "./Usuario.js";

export const resolvers = { Produto, Usuario, Query, Mutation };
