const { default: axios } = require("axios");
const { response } = require("express");

class Student {
    constructor() {

    }
    home(type) {
        let data = this.getInfo(type, 1)
        return data + 5;
    }

    userId() {
        return 12;
    }

    getInfo(type, status) {
        return type;
    }

    finalMarks(total) {
        let external = this.getExternal(total)
        let internal = this.getInternal(total)

        return external + internal + 10; // 5+41+10
    }

    getExternal(total) {
        return total + 1;
    }

    getInternal(total) {
        return total - 1
    }

    dbData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(10), 12)
        })
    }

    thirdPartyAPI() {
        return new Promise((resolve, reject) => {
            axios.get('https://api.publicapis.org/entries')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
        })
    }

}

module.exports = Student