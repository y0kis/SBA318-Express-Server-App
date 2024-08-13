const express = require("express");
const router = express.Router();

let users = [{ id: 1, postId: 1, content: "this is the first comment" }];

router.get("/", (req, res) => {
    res.json(users);
});

router.get("/post/:postid", (req, res) => {
    const postusers = users.filter((c) => c.postId == req.params.postId);

    res.json(postusers);
});

///new user///////////
router.post("/", (req, res) => {
    const newUser = {
        id: posts.length + 1,
        postId: req.body.postId,
        content: req.body.content,
    };
    users.push(newUser);
    res.redirect("/posts/${req.body.postId");
});

///path //////////
router.patch("/", (req, res) => {
    const user = users.find((c) => c.id == req.params.id);
    if (user) {
        user.content = req.body.content || user.content;
        res.send(user);
    } else {
        res.status(404).send("not found");
    }
});

////delete///////////
router.delete("/", (req, res) => {
    const users = users.filter((c) => c.id == req.params.id);
    res.status(204).send();
});

module.exports = router;