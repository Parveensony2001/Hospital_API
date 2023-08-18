console.log('usercontroller is working');
const hospital = require('../schema/doctor');
const user = require('../schema/user');
const report = require('../schema/reports');
const { status } = require('./homecontroler');
module.exports.resitration = async (req,res)=>{
    try {
        const userdata =await new user.find('req.body');
        await userdata.save();
        console.log('in resitration and usercontroller'+userdata);
        res.status(200).json({message:"successfuly updataes"})
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}
module.exports.report =async (req,res)=>{
    try {
        const {dr_id,patient_id, status,data} = req.body;//we give the data in views statics parts in frontend
    
        const newReport = new Report({
            Doctor: dr_id,
            Patient: patient_id,
            data: data,
            status: status
        });
        await newReport.save();

        res.status(201).json({ message: 'Report created successfully' });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}
module.exports.userdata = async (req,res)=>{
    try {
        const userid = req.params.userid;

        const userdata = await user.findById(userid);

        if(!userdata)
        return res.status('404').json({message:'user does not exist'});

        else

        return res.status('202').json({
            message:'user data successfully updated',
            data:userdata
        });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}
module.exports.resultreport =async (req,res)=>{
    try {
        //give all data in oatient doctor and any types of schema related 
        const givendata = req.params.status;
        const reportdata = await report.find({status:givendata});
        res.status(200).json({
            message:`all report is fatching data of doctor have been provided and ${givendata}`,
            data:reportdata
        })
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}
module.exports.information = (req,res)=>{
    try {
        
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}