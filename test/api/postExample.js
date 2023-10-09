const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Example', () => {
    it('Success creat user', async () => {
        const response = await request(baseUrl())
            .post('/user')
            .send(DATA.CREATE_USER_DATA)
        console.log((await response).status)
        console.log((await response.body))
    })
})