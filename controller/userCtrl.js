const userList = (req, res) => {
    res.send("Hello World")
}

const newData = () => {
    return new Promise((resolve, reject) => {
        resolve({ otp: 9000 })
    })
}

const data = (req, res) => {
    res.status(200).send({
        statusText: "success",
        data: {
            list: "hello"
        }
    })
}

module.exports = {
    userList,
    newData,
    data
}