async function AcctInfo() {


    //const provider = await detectEthereumProvider();
    // var web3 = new Web3(provider);
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
    const balance = await ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] })
    //const web3 = window.web3;
    //const accounts = await web3.eth.getAccounts();

    document.getElementById("AddressBalance").value = "Balance: " + parseInt(balance, 16) / 1000000000000000000 + ' ETH';
    

}



  async function disconnect() {

  }

  
  async function switchChain(chain) {

   
    const BSC = [{ chainId: '0x38' }]; // BSC
    const POLY = [{ chainId: '0x89' }]; // MATIC
    const ROP = [{ chainId: '0x3' }]; // Ropsten
    const ETH = [{ chainId: '0x1' }];

    var numchain = {'0x1': 'Ethereum', '0x3': 'Ropsten', '0x89': 'Polygon', '0x38': 'Binance'}
    var chains = { "Binance": BSC, "Polygon": POLY, "Ropsten": ROP, "Ethereum": ETH};

    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: chains[chain]
    })

const accounts = await ethereum.request({ method: 'eth_accounts' });
ethereum.on('chainChanged', (_chainId) => window.location.reload());
var layer = {"Polygon": "https://polygon-mainnet.g.alchemy.com/v2/HUk91ebxvzED1r4s37A1bRJNqawQSUfX", 
            "Ethereum": "https://eth-mainnet.alchemyapi.io/v2/UScvEF7bZREkyUNB1x1oUk_FcHQZA9RG", 
            "Ropsten": "https://eth-ropsten.alchemyapi.io/v2/2NyPkMknaZQdPYgkErIHduif2GV6lfPe", 
            "Binance": "https://apis-sj.ankr.com/0dda88728b204ba69841f77f6dccf0ab/6e1aade2282802189d5e936c4d5f9130/binance/full/main"
            }





 }