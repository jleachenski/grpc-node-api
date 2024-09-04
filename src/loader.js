import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const paths = [`/src/protos/book.proto`];

const workdir = process.cwd();

const definition = protoLoader.loadSync(
  paths.map((path) => workdir + path),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const grpcInstance = grpc.loadPackageDefinition(definition);

// Keep here?

import manipulateBook from "./procedures/manipulate_book.js";
import queryBook from "./procedures/query_book.js";

const loadServices = (server) => {
  server.addService(grpcInstance.book.Book.service, {
    manipulateBook,
    queryBook,
  });

  return server;
};

export default loadServices;
