KEY CONCEPTS:



1_ Every Block within a chain contains at least the following:

    - A timestamp of when the block was added to the chain.

    - Some sort of relevant data. In the case of a cryptocurrency, 
    this data would store transactions, but blockchains can be helpful 
    in storing much more than just transactions for a cryptocurrency.

    - The encrypted hash of the block that precedes it.

    - An encrypted hash based on the data contained within 
    the block(Including the hash of the previous block).


2_ The key component that makes a blockchain so powerful is that 
   embedded in each block's hash is the data of the previous block 
   (stored through the previous block's hash). This means that 
   if you alter the data of a block, you will alter its hash, and 
   therefore invalidate the hashes of all future blocks.


   sample from article: https://dev.to/codesphere/how-to-build-your-own-blockchain-in-nodejs-3ijh

   Will continue to develop in the future