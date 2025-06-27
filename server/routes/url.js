const express = require("express");
const router = express.Router();
const { createShortUrl, handleRedirect } = require("../controllers/urlController");

router.post("/shorten", createShortUrl);
router.get("/:shortId", handleRedirect);

module.exports = router;
