const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 123,
            "username": "hehe",
            "firstName": "haha",
            "lastName": "hoho",
            "email": "haha@gmail.com",
            "password": "haha123",
            "phone": "123455678",
            "userStatus": 1
        })
    it('response status equal to 200', async () => {
        //cek response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        //expect dalam body response terdapat value 'message'
        expect((await response).body).to.haveOwnProperty('message')
    })

    //Reporting on mochawesome

})