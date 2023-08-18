console.log('homecontroller is working');

const Report = require('../schema/reports');

module.exports.status = async (req, res) => {
    try {
        const statusParam = req.params.status; 
        const reports = await Report.find({ status: statusParam });

        res.status(200).json({//code 200 means success
            message: 'Reports retrieved successfully',
            data: reports
        });
    } catch (error) {
        console.error('Error in status route:', error);
        res.status(500).json({                                      //internal error occour
            message: 'An error occurred',
            error: error.message
        });
    }
}