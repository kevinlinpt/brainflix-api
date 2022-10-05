const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    const videos = JSON.parse(fs.readFileSync(`data/videos.json`));
    res.json(videos);
})

router.get("/:videoId", (req, res) => {
    const videos = JSON.parse(fs.readFileSync(`data/videos.json`));
    const activeVideo = videos.find(video => video.id === req.params.videoId);
    res.json(activeVideo);
})

router.post("/", (req, res) => {
    let videos = JSON.parse(fs.readFileSync(`data/videos.json`));
    let newVideo = {
        id: req.body.id,
        title: req.body.title,
        channel: req.body.channel,
        views: req.body.views,
        likes: req.body.likes,
        duration: req.body.duration,
        description: req.body.description,
        image: req.body.image,
        timestamp: req.body.timestamp,
        video: req.body.video,
        comments: req.body.comment,
      }
    videos.push(newVideo)
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
    res.json(videos);
})

module.exports = router;