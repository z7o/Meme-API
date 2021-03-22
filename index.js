// This api can NEVER produce NSFW //

const express = require('express');
const rateLimit = require("express-rate-limit");
const randomPuppy = require("random-puppy")
const app = express();


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000 // 1k request per 10 minutes
});

app.use(limiter);

/* Add this part if you want to limit your api to only people with an API key.
    let apiKey = req.header('Authorization')
    let key = "HI"
        // if (apiKey === key) {
        //     res.status(403)
        //     res.send(JSON.stringify({ "error": "Access denied! You need an API key." }))
        // } else {
*/

app.get('/', async(req, res) => {

    res.status(200);
    const subReddits = ["dankmemes", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    let img = await randomPuppy(random);
    if (img.endsWith('.mp4')) img = await randomPuppy(random); // Against getting a video as "meme" as not many sites can handle that.
    if (img.endsWith('.mp4')) img = await randomPuppy(random); // Against getting a video as "meme" as not many sites can handle that.
    if (img.endsWith('.mp4')) img = await randomPuppy(random); // Against getting a video as "meme" as not many sites can handle that.
    if (img.endsWith('.mp4')) img = await randomPuppy(random); // Against getting a video as "meme" as not many sites can handle that.
    if (img.endsWith('.mp4')) img = await randomPuppy(random); // Against getting a video as "meme" as not many sites can handle that.

    res.send(JSON.stringify({ "url": img }))

    // }
});

app.listen(process.env.PORT || 80, () => {
    console.clear()
    console.log(`~ Your meme API has started ~\n\nRunning on: localhost:80`);
});
