const { assert } = require('chai');
const Color = artifacts.require("Color");
contract('Color',async(accounts) => {
    let contract

    beforeEach(async () => {
        contract  = await Color.deployed()
        });

    describe('deployment', async() => {

        it('deploys successfully', async() => {
            const address = contract.address
            assert.notEqual(address,"")
            assert.notEqual(address,undefined)
            assert.notEqual(address,null)
        })

        it('has name', async() => {
            const name = contract.name
            assert.notEqual(name,"")
            assert.notEqual(name,undefined)
            assert.notEqual(name,null)

        })

        it('has symbol', async() => {
            const symbol = contract.symbol
            assert.notEqual(symbol,"")
            assert.notEqual(symbol,undefined)
            assert.notEqual(symbol,null)
        })

    })
})
