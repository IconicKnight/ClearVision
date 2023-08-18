const asyncHander = require('express-async-handler');


//@desc    Get goals
//@route   Get /api/goals
//@access  Private  
const getGoals = asyncHander(async (req, res) => {
    res.status(200).json({massage: 'Get goals'})
})



//@desc    set goal
//@route   POST /api/goals
//@access  Private  
const setGoal = asyncHander(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please provide a text field')
    }



    res.status(200).json({massage: 'Set goal'})
})


//@desc    Update goal
//@route   Get /api/goals/:id
//@access  Private  
const updateGoal = asyncHander(async (req, res) => {
    res.status(200).json({massage: `Update goal ${req.params.id}`})
})



//@desc    Delete goal
//@route   DELETE /api/goals/:id
//@access  Private  
const deleteGoal = asyncHander(async (req, res) => {
    res.status(200).json({massage: `Delete goal ${req.params.id}`})
})




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}