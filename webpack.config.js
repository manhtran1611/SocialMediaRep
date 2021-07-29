import path from "path";

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "app.tsx",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
};
