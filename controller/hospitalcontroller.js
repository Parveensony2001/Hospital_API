console.log('hospitalcontroller is working');
const User = require('../schema/user'); // Import the User schema
const Doctor = require('../schema/doctor'); // Import the Doctor schema
const Report = require('../schema/reports'); // Import the Report schema

module.exports.create = async (req, res) => {
    try {
        const newUser = new User(req.body); // Create a new user instance from the request body
        await newUser.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}

module.exports.asignDoctor = async (req, res) => {
    try {
        const { patientId, doctorId } = req.params;

        // Find the patient and doctor by their IDs
        const patient = await Report.findById(patientId);
        const doctor = await Doctor.findById(doctorId);

        if (!patient || !doctor) {
            return res.status(404).json({ message: 'Patient or doctor not found' });
        }

        // Assign the doctor to the patient
        patient.doctor = doctorId;
        await patient.save();

        res.status(200).json({ message: 'Doctor assigned successfully' });
    } catch (error) {
        console.error('Error in assigning doctor:', error);
        res.status(500).json({ message: 'Doctor assignment failed' });
    }
}
module.exports.giveExpirance = async (req,res)=>{
    try {
        const {doctor_review ,yearofexp} = req.body;

        const dr = await Doctor.find();
        const drname = await dr.map(dr=>{
            firstname : dr.firstName;
            lastname : dr.lastName;
            gmail:dr.email;
            study:dr.qualifications;
        })
        if(!dr)
        return res.status(404).json({message:'Dr not found'});
        
        dr.yearofexp +=yearofexp;
        doctor_review = dr;

        await dr.save();

        res.status(200).json({massage : 'successfully expirance part updated'});
    } catch (error) {
        console.error('Error in algoritham in expiranace:', error);
        res.status(500).json({ message: 'Expirance failed' });
    }
}