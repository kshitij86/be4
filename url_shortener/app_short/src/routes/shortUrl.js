const auth = require("../middlewares/auth");
const express = require("express");
const router = express.Router();
const ShortUrlController = require("../controllers/shortUrl");

// this is called when user is logged in
// localhost:8080/getUrl?url=https:google.co.in
router.get("/getUrl", auth, ShortUrlController.getUrl);

router.get("/allUrls", ShortUrlController.getAllUrls);
router.get("/shortUrls", auth, ShortUrlController.getAllUrlsForUser);
router.get("/:code", auth, ShortUrlController.redirectUrl);

module.exports = router;
