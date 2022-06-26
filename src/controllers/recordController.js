const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return;
    }
    const records = recordService.getRecordForWorkout(workoutId);

    res.status(200).send({ status: 'OK', data: records });
};

module.exports = { getRecordForWorkout };
