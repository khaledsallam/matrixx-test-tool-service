import express, { ErrorRequestHandler, json, urlencoded } from "express";
import routes from "./routes";
import cors from "cors";
const app = express();

// Set up CORS
const originWhitelist = [
  "http://localhost:3000",
  "null", // Needed for localhost oddity
];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || originWhitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS ${origin}`));
    }
  },
};

app.use(express.static("public"));
app.use(cors(corsOptions));
app.disable("x-powered-by");
app.use(json({ limit: "25mb" }));
app.use(urlencoded({ extended: true }));
app.use("/", routes);

//Default 404 handler
app.use((req, res) => {
  return res.status(404).json({ Error: "Not Found" });
});
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("app:ErrorHandler:", err);
  return res.status(err.status || 500).json({ Error: `${err.message}` });
};
//Default error handler
app.use(errorHandler);

export default app;
