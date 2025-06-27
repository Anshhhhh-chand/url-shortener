const shortid = require("shortid");
const Url = require("../models/url");

exports.createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl || !originalUrl.startsWith("http")) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  const shortId = shortid();
  try {
    const newUrl = await Url.create({ shortId, originalUrl });
    res.json({ shortUrl: `${req.protocol}://${req.get("host")}/api/url/${shortId}` });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.handleRedirect = async (req, res) => {
  const { shortId } = req.params;
  try {
    const entry = await Url.findOne({ shortId });
    if (!entry) return res.status(404).send("URL not found");

    entry.visitHistory.push({});
    await entry.save();

    res.redirect(entry.originalUrl);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
