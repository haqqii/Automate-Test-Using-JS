const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Example', () => {
    it('Finf Pets by status', async () => {
        const response = await request(baseUrl())
            .get('/store/inventory')
        console.log((await response).status)
        console.log((await response.body))
    })
})