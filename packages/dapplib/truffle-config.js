require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strong rice stick exchange inflict kangaroo army genre'; 
let testAccounts = [
"0x6e173257ac31f6a1a72dd25ad5d286c5bee2eb6ecf5e4e2410a7b61c5a4181ac",
"0xcf14affcaa3a3f1d11cdc13a42e8466e2e2b152e1eb541b952d4baa98ea732ce",
"0x1d36c858c42c42f29762a9adcd861f573c096da37f56e23f92ede4b4950b5dd8",
"0x7d40c75dde7a8bd477208b9687954e190b5822f8d25cc3986364a2ccaa89fdd1",
"0x9f77c054768861c2ffa980fee92a323e74fa7b590bbed3d8d7e204fbfcadca39",
"0x134722c4bd266f0ac9d7dc4e333f9062e3aa6725cd3d8c2a3511f948f8a03495",
"0x177a57dcb64620e4630f0ba57f95e85c40e3ef0c423f922387a7be09296006dc",
"0x4876928831bac209557f88d25094bf100a0772c337bcbaf34536645b5cfa3875",
"0x810a3615705283648c43a9a1acbf5ab43f2901b1a4c15154928bf34e7969d44b",
"0x3b7b1315e5e14316efa81d02e420fe97ddd87b8c948f17501bf2a26df7bb2b39"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


