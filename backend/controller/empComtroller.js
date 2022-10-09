const helper = require('../helper/pgdbHelper');
const controller = {}


controller.addUserDetails = async (req, res) => {
    try {
        const query = `INSERT INTO emp.emp_details(
            emp_name, emp_address, emp_prid)
            VALUES ('${req.body.name}', '${req.body.email}', '${req.body.prid}')`;
        const result = await helper.excuteQuery(query);
        res.status(200).json(result);
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500);
    }
};

controller.fetchAllUserDetails = async (req, res) => {
    try {
        const query = `SELECT * FROM emp.emp_details`;
        const result = await helper.excuteQuery(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500);
    }
};

controller.editUserDetails = async (req, res) => {
    try {
        const query = `UPDATE emp.emp_details
        SET emp_name='${req.body.emp_name}', emp_address='${req.body.emp_address}' 
        WHERE emp_prid='${req.body.emp_prid}'`;
        const result = await helper.excuteQuery(query);
        res.status(200).json(result);
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500);
    }
};

controller.deleteUserDetails = async (req, res) => {
    try {
        const query = `DELETE FROM emp.emp_details WHERE emp_prid='${req.params.id}'`;
        const result = await helper.excuteQuery(query);
        res.status(200).json(result);
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500);
    }
};

module.exports = controller;