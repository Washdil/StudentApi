const Student = require("../models/Students");

exports.getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        
        if(!students) {
            res.status(404).json({
                message: "no student",
            });
        }
        res.status(200).json(students);
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};


exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) {
            return res.status(404).json({
                message: "student not found",
            });
        }

        res.status(200).json(student);
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.createStudent = async (req , res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.updateStudent = async (req , res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )

        if(!student) {
            res.status(404).json({
                message: "student not found",
            });
        }

        res.status(200).json(student);
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
    
};


exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        
        if(!student) {
            res.status(404).json({
                message: "student not found",
            });
        }

        res.status(200).json({
            message: "Student deleted Successfully",
        })
    }

    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};



