const {Block, Blockchain} = require('./blockchain')

// Test #1: Displaying Block Hashes
console.log('\n### TEST #1 ##############################')

const block_1 = new Block({from: "Joe", to: "Jane"})
const block_2 = new Block({from: "Jane", to: "Joe"})

console.log('BLOCK_1: ' + block_1.hash)
console.log('BLOCK_2: ' + block_2.hash)

// Test #2: Changing data to show changed hash
console.log('\n### TEST #2 ##############################')

const oldHash = block_1.hash

block_1.data = { from: 'cristian', to: 'cristina' }
block_1.hash = block_1.computeHash()

const newHash = block_1.hash

console.log('OLD: ', oldHash)
console.log('NEW: ', newHash)

// Test #3: Creating a blockchain
console.log('\n### TEST #3 ##############################')

const chain_1 = new Blockchain()

chain_1.pushBlock(block_1)
console.log('Chain push #1:\n', chain_1)

chain_1.pushBlock(block_2)
console.log('Chain push #2:\n', chain_1)


// Test #4: Validate blockchain
console.log('\n### TEST #3 ##############################')
console.log('Valid Chain: ',chain_1.isValid())