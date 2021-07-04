const crypto = require('crypto')

class Block {
    constructor(data, prevHash = '') {
        this.timestamp = Date.now()
        this.data = data
        this.prevHash = prevHash
        this.hash = this.computeHash()
    }

    computeHash() {
        let strBlock = this.prevHash + this.timestamp + JSON.stringify(this.data)
        return crypto.createHash("sha256").update(strBlock).digest("hex")
    }
}

class Blockchain {
    constructor() {
        this.blockchain = [this.makeGenesisBlock()]
    }

    makeGenesisBlock() {
        return new Block({})
    }

    latestBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }

    pushBlock(newBlock) {
        newBlock.prevHash = this.latestBlock().hash
        newBlock.hash = newBlock.computeHash()

        this.blockchain.push(newBlock)
    }

    isValid() {
        for (let i = 1; i < this.blockchain.length; i++){
            const currentBlock = this.blockchain[i]
            const previousBlock = this.blockchain[i - 1]

            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false
            }

            if (currentBlock.prevHash !== previousBlock.hash) {
                return false
            }
        }

        return true
    }
}

module.exports = {
    Block,
    Blockchain
}


