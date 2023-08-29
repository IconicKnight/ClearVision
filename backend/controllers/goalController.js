const asyncHander = require('express-async-handler');

const Goal = require('../models/goalModel')


//@desc    Get goals
//@route   Get /api/goals
//@access  Private  
const getGoals = asyncHander(async (req, res) => {
    const goals = await Goal.find()


    res.status(200).json(goals)
})



//@desc    set goal
//@route   POST /api/goals
//@access  Private  
const setGoal = asyncHander(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please provide a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })



    res.status(200).json(goal)
})


//@desc    Update goal
//@route   Get /api/goals/:id
//@access  Private  
const updateGoal = asyncHander(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('goal not found')
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})



//@desc    Delete goal
//@route   DELETE /api/goals/:id
//@access  Private  
const deleteGoal = asyncHander(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('goal not found')
    }

    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}