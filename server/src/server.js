const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const productRouter = require("./resources/product/product.router");

const app = express();

app.disable("x-powered-by");

app.set("port", process.env.APP_PORT || 3001);

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/products", productRouter);

const start = async () => {
  try {
    app.listen(app.get("port"), () => {
      // eslint-disable-next-line no-console
      console.log(`REST API en http://localhost:${app.get("port")}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

module.exports = start;
