require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Start Here" });
// });

const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(PORT, console.log(`server started at port ${PORT}`));

// fetch all the required routes here
let userRouter = require("./routes/user");
// This is the module that deals with shortening URL
let ShortUrlRouter = require("./routes/shortUrl");
const auth = require("./middlewares/auth");
const ShortUrlController = require("./controllers/shortUrl");
//define root routes here
app.use(ShortUrlRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});
