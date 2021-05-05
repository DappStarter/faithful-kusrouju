require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember huge inflict nature tail stem'; 
let testAccounts = [
"0xd13b16f3e922a16fa7cbbd2f7a6a6f376b834f7fac0682c28f5d264582bf65dd",
"0xcfce024f43d9cd2fb723912f8fc4ab169dbff30ac0462bdbe6a9eb940916cf08",
"0xa6bb42792f5b228c29c735c9ebd0e8e139fdc4a2a701e6f5bbc1451a22d1a12d",
"0x0a373c19c8d4281d85359d5e77ffe07cb6b0fa05f39fb9f5f998dceb8ec0ee9c",
"0x4383d709ee39750f09810befdeac94efe9753ba591f8c9460c9119967c1ef235",
"0xf09e9cb565004243017e8299a9c372e59574869cd9e4a404bcf5e1ef680e96e7",
"0xd20a2a36b0177e306f952a9b38aa131ba39f25d7f0b18577151dc27a600636e9",
"0x5cf3c0198cdabf6f6a228640284bc40ad9ecc4b68e2d9da45bcd70ca3267c93b",
"0xaaaa3ca2b342b6cc5db6d20c5b461a3879f68aae4414c6be4acc752621d502d5",
"0x6681f2091a30231eb85db5f4b2a848344af83a19f28ceece82f9b1d506ce2c38"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
