const Person = require('../models/model');
const { json } = require('body-parser');


findPerson = function(req, res) {
    const body = req.body;
    console.log(body)

    if (!body) {
        return res.status(400).json({
            "success": false,
            "message": "You must provide a valid ID number",
        })
    } else {
        Person.findOne({id: body["ID"]}, (err, person) => {
            if (err) {
                return res.status(400).json({
                    'success': false,
                    "message": "There was an error processing your request."
                })
            }

            if (!person) {
                return res.status(403).json({
                    'success':false,
                    'message': "This entity doesn't exist in our database."
                })
            } else {
                return res
                .status(200)
                .json({
                    'success': true,
                    'data': person, 
                })
            }

            }
        ).catch(err => console.log(err))
    }
}

addPerson = function(req, res) {
    console.log(req.body)
    Person.create({
        id: req.body["ID"],
        name: req.body["Name"],
        size: {
            XSmall: req.body["XS"],
            Small: req.body["S"],
            Medium: req.body["M"],
            Large: req.body["L"],
            XLarge: req.body["XL"],
            XXLarge: req.body["XXL"],
            XXXLarge: req.body["XXXL"],
        },
        Collected: false,
}, (err, success) => {
    if (err) {
        // console.log(err)
        return res.status(401).json({
            'success': false,
            "message": "There was an error processing your request."
        })
    } if (success) {
        return res
        .status(200)
        .json({"message":"done"})
    }
})
}

updateCompleted = function (req, res) {
    Person.findOne({id: req.body["ID"]}, (err, person) => {
        if (err || !person) {
            res.status(404).json({
                "success": false,
                "message": "There was an error in updating the completed status of this person. Try later.",
            })
        } else if (person) {
            person.update({completed: !person['completed']})
            res.status(200).json({
                "success": true,
            })
        }
    } )
}

module.exports = {
    findPerson,
    addPerson,
    updateCompleted,
}