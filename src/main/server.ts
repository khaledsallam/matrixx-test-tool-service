import app from "./app";
import boxen from "boxen";
import environment from "./environment";
import { createServer } from "http";

const PORT = environment.hosting.port;

const startUpMessage = `***** Matrixx test tool service *****

${environment.app.name} is up and running (${process.env.NODE_ENV})

Node: v${process.versions.node}

Browse http://localhost:${PORT}/

`;

createServer(app).listen(PORT, () => {
  console.log(boxen(startUpMessage, { padding: 1, margin: 1 }));
});
