const { enquiryModel } = require("../models/enquiry.model")
const { userModel } = require("../models/user.model")

exports.create = async (req, res) => {
    const { name, email, course } = req.body;

    try {
        const enquiry = await enquiryModel.create({
            name, email, course,
        });

        // Provide response
        return res.status(201).json({ message: 'Enquiry created successfully', enquiry });
    } catch (error) {
        console.error('Error creating enquiry request:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

exports.logs = async (req, res) => {

    try {
        const logData = await enquiryModel.find({ assigned: false });

        if (!logData.length) {
            return res.status(404).json({ message: 'Enquiry log not found' });
        }

        return res.status(201).json({ message: 'Logs fetched successfully', logData });

    } catch (error) {
        console.error('Error fetching doubt request:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

exports.assign = async (req, res) => {
    const { clientEmail, userId } = req.body;
    try {
        const updatedEnquiry = await enquiryModel.findOneAndUpdate(
            { email: clientEmail },
            { assigned: true, assignedEmployeeId: userId },
            { new: true }
        );

        // Provide response
        return res.status(201).json({ message: 'Enquiry status updated successfully', updatedEnquiry });
    } catch (error) {
        console.error('Error updating enquiry request:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


exports.getassigned = async (req, res) => {
    const { userId } = req.body;
    try {
        const myEnquiry = await enquiryModel.find({
            assignedEmployeeId: userId,
        });

        if(myEnquiry.length == 0){
            return res.status(400).json({ message: 'No enquiry found!' });
        }

        // Provide response
        return res.status(201).json({ message: 'UserEnquiry fetched successfully', myEnquiry });
    } catch (error) {
        console.error('Error updating enquiry request:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}