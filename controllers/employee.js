const sendEmployee = (req, res) => {
    res.send({
        empID : 1,
        empName : `John Smith`,
        empSalary : 40000 
    })
}

module.exports.sendEmployee = sendEmployee