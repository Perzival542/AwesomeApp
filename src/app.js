import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
//import orderRoutes from "./routes/order.routes.js";
//import menuRoutes from "./routes/menu.routes.js";
//import userRoutes from "./routes/user.routes.js";
//import { FRONTEND_URL } from "./config.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(
  cors({
    credentials: true,
    // origin: FRONTEND_URL,
  })
);

app.use(fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client/build')));

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api", menuRoutes);
// app.use("/api", userRoutes);
// app.use("/api", orderRoutes);

if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html") );
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}

export default app;