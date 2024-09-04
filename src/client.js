import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = process.cwd() + "/src/protos/hello_world.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const helloworld = grpc.loadPackageDefinition(packageDefinition).helloworld;

const stub = new helloworld.Greeter(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);

stub.sayHello({
    name: "aaaaaaaaa"
}, function (err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
});
