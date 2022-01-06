const { assert } = require('chai');
const Color = artifacts.require("Color");


require('chai').use(require('chai-as-promised')).should()

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

    describe('minting', async() => {

        it('creates a new token', async() => {
           const result =  await contract.mint("#FFFFFF")
           const totalSuply = await contract.totalSupply()
           assert.equal(totalSuply,1)
           const event = result.logs[0].args
           assert.equal(event.tokenId.toNumber(),0,'id is correct')
           assert.equal(event.from,"0x0000000000000000000000000000000000000000",'from is correct')
           assert.equal(event.to,accounts[0],'to is correct')
           //cannot mint same color twice
           await contract.mint("#FFFFFF").should.be.rejected
    
        })

    })
})
