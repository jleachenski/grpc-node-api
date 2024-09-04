import "dotenv/config";
import grpc from "@grpc/grpc-js";
import loadServices from "./loader.js";

loadServices(new grpc.Server()).bindAsync(
  `${process.env.API_HOST}:${process.env.API_PORT}`,
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log(`Running in ${process.env.API_HOST}:${process.env.API_PORT}`);
  }
);