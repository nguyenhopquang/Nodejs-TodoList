var express = require('express');
var router = express.Router();
var list= require("../Models/todoList");

/* GET users listing. */


router.get("/", function (req, res) {
    var todolist=[];
    list.getAllList(function (err, rows) {
        if (err){
            throw err;
        } else {
            todolist=rows;
            res.render("index", {todolist: todolist});
        }
    });

});

router.get("/list", function (req, res) {
    list.getAllList(function (err, rows) {
       if (err){
           res.json(err);
       } else {
           res.json(rows);
       }
    });
});

router.post("/list", function (req, res, next) {
    list.addList(req.body, function (err, count) {
        if (err)
        {
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
});
router.delete("/list/:id", function (req, res, next) {
    list.deleteList(req.params.id, function (err, count) {
        if (err)
        {
            res.json(err);
        } else
        {
            res.json(count);
        }
    })
});
router.put("/list/:id", function (req, res, next) {
    list.updateList(req.params.id, req.body, function (err, rows) {
        if (err)
        {
            res.json(err);
        } else
        {
            res.json(rows);
        }
    })
});
module.exports = router;
