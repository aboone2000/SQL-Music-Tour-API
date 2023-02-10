// DEPENDENCIES
const stage = require('express').Router()
const db = require('../models')
const stage = require('../models/stage')
const { Stage } = db 

// FIND ALL STAGES
stage.get('/', async (req, res) => {
    try {
        const foundStage = await Event.findAll({
            order: [ ['avaliable_start_time', 'ASC'] ],
            where: {
                name: { [Op.like]:`%${req.query.name ? req.query.name: ''}%`}
            }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
stage.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A EVENT
stage.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Band will be played at this stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A EVENT
stage.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Event.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} `
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



// EXPORT
module.exports = stage