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

export default grpcInstance;
