const environment = {
  app: {
    name: process.env.npm_package_name,
  },
  hosting: {
    port: process.env.PORT || 9000,
  },
  mongodb: {
    connectionUrl:
      process.env.MONGO_DB_CONNECTION_URL || "mongodb://mongodb:27017/",
    dbName: process.env.MONGO_DB_NAME || "matrixxtt",
  },
};

export default environment;
