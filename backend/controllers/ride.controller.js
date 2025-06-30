const rideService = require('../services/ride.service');
const { validateResult, validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const ride = await riderService.createRide({user: req.user._id, pickup, destination, vehicleType});
        return res.status(201).json(ride);
    } catch (err) {
        return res.status(400).json({ message: err.message})
    }
}