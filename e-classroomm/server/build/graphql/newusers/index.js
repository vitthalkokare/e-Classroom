"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mutation_1 = require("./mutation");
const query_1 = require("./query");
const resolvers_1 = require("./resolvers");
const typeDef_1 = require("./typeDef");
exports.User = { mutations: mutation_1.mutations, queries: query_1.queries, resolvers: resolvers_1.resolvers, typedefs: typeDef_1.typedefs };
