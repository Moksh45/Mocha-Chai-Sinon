const userList = (req,res)=>{
    res.send("Hello World")
}

const newData = ()=>{
    return new Promise((resolve,reject)=>{
        resolve({otp:9000})
    })
}


module.exports = {
    userList,
    newData
}