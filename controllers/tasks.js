const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const allTask = await Task.find({});
        res.status(200).json(allTask);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
};
const createTask = async (req, res) => {
    try {
        const createTask = await Task.create(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
    res.status(200).json(createTask);
};
const getSingleTask = async (req, res) => {
    try {
        const getSingleTask = await Task.findOne({_id: req.params.id });
        if(!getSingleTask) {
            return res.status(404).json(`_id: ${req.params.id} は存在しません。`)
        }
        res.status(200).json(getSingleTask);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
};
const updateTask = async (req, res) => {
    try {
        const updateTask = await Task.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            {
                new: true,
            }
        );
        if(!updateTask) {
            return res.status(404).json(`_id: ${req.params.id} は存在しません。`)
        }
        res.status(200).json(updateTask);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
};
const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findOneAndDelete({ _id: req.params.id } );
        if(!deleteTask) {
            return res.status(404).json(`_id: ${req.params.id} は存在しません。`)
        }
        res.status(200).json(deleteTask);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};