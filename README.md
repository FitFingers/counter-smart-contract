# Tiny Counter Contract

## Solidity Smart Contract and JavaScript/Node Interface

#### Setup

- Alchemy project API key (or infura key)
- MetaMask seed phrase (to instantiate the provider)
- `.env` file with this data in it

#### Contract Deployment

From a terminal session with the env loaded (`. .env`), run

`yarn truffle deploy --network rinkeby`

(add `--reset` if this is a redeployment of an existing contract).

The compiler will return the contract address(es); take note.

#### Calling the Smart Contract

Add the following data to the same `.env` as before:

- MetaMask wallet address (of the owner of the contract)
- The solidity contract address

From a terminal session with these env variable loaded, run:

`node scripts/getCount.js`
`node scripts/setCount.js n`
_Where "n" is any integer._

#### Notes

- This smart contract uses no proxy and is therefore immutable.
