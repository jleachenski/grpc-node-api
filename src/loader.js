import grpcInstance from "./grpc.js";
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
