const sendProduct = (req, res) => {
    res.send({
        brandName : `Sony`,
        productName : `Play Station 5`,
        productPrice : 61499 
    })
}

module.exports.sendProduct = sendProduct