const corsVar = {
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3001",
    "http://localhost:3001",
    "http://localhost:5000",
  ],
  default: "http://localhost:3000",
};

export function corsCheck(req, res, next) {
  console.log("corsCheck req.headers:", req.headers);
  console.log("x-api-key:", req.headers["x-api-key"]);

  var origin = "";

  if (
    corsVar.origin.indexOf(
      req.header("origin") && req.header("origin").toLowerCase()
    ) > -1
  ) {
    origin = req.headers.origin;
  } else {
    origin = corsVar.default;
  }

  console.log("allowed origin returned:", origin);

  res.header("Access-Control-Allow-Origin", origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-api-key, X-API-KEY"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

  next();
}
