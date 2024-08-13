const express = require("express");
const router = express.Router();

let posts = [
    { id: 1, tittle: "First Post", content: "this is the first post" },
];

router.get("/", (req, res) => {
    res.render("posts", { posts });
});

router.get("/:id", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (post) {
        res.render("post", { post });
    } else {
        res.status(404).send("not found");
    }
});

///new post///////////
router.post("/", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        tittle: req.body.tittle,
        content: req.body.content,
    };
    posts.push(newPost);
    res.redirect("/posts");
});

///path //////////
router.patch("/", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (post) {
        post.tittle = req.body.tittle || post.tittle;
        post.content = req.body.content || post.content;
        res.send(post);
    } else {
        res.status(404).send("not found");
    }
});

////delete///////////
router.delete("/", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    res.status(204).send();
});

module.exports = router;