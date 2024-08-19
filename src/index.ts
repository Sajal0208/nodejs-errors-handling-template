import app from "./app";

const initServer = () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

initServer();
