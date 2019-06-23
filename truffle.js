var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic ="upon patrol change modify verify cigar motor quick obey use fee trick";

module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 8545,
               network_id: "*" // Match any network id
          }
     }
};
