const Investment = require("../models/Investment");

exports.listAll = (req, res) => {
    Investment.find({}, (err, investment) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(investment);
    });
};

exports.createNew = (req, res) => {
    let newInvestment = new Investment(req.body);
    newInvestment.save((err, investment) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(investment);
    });
};

exports.delete = (req, res) => {
    Investment.remove({ _id: req.params.id }, (err, investment) => {
        if (err) {
            res.status(404).send(err);
        }
        res.status(200).json({ message: "Investment successfully deleted" });
    });
};