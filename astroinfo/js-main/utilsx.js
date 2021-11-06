// const { default: Web3 } = require("web3");
async function change() {  
    
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    var chainIDs = await ethereum.request({method: 'eth_chainId'});
    var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom'};
    var specie = {'Ethereum': 'img/ethereum-eth-logo.png', 'Polygon': 'img/polygon-matic-logo.png', 'Binance': 'img/binance-coin-bnb-logo.png', 'Fantom': 'img/fantom.png'}
      
    console.log(accounts.length)
    if (accounts.length > 0 && numchain[chainIDs] != undefined ) {
  
      document.getElementById('specie').src = specie[numchain[chainIDs]]
      document.getElementById('choose').innerHTML = numchain[chainIDs]
      document.getElementById(numchain[chainIDs]).className += ' card-green'
      document.getElementById("Wallet").innerHTML= "Connected";
  
    } else if(accounts.length > 0 && numchain[chainIDs] == undefined) {
       document.getElementById("Wallet").innerHTML= "Unsupported";
       document.getElementById("AWPass").innerHTML = "Change Chain";
    }  else if(accounts.length < 0 && numchain[chainIDs] == undefined) {
          document.getElementById("AWPass").disabled = false;
          document.getElementById("Wallet").innerHTML= "Connect Wallet";
      }
  }
      
      async function check() {
        // Then get the currently selected radio button's value
        
        console.log(window.ethereum)
  
        if (window.ethereum !== undefined) {
    // From now on, this should always be true:
    // provider === window.ethereum
            console.log(window.ethereum); // initialize your app
            
                                          } else {
  
            
             $("#nowebModal").modal('show');
    
                                          }
  
        // Check the value to make sure you want to show the modal
       
      }
   
  
  async function connect() {
  
  
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(change)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        document.getElementById("Wallet").innerHTML =  "Rejected Connection";
        document.getElementById("Wallet").value =  "Rejected Connection";
        
        document.getElementById("Wallet").contentWindow.location.reload(true);
        
      } else {
        console.error(err);
      }
    }).then((result) => { window.location.reload()});
  
   
  
      
   
    
  
    
  }
  
  
  
  // async function checkchain () {
  // const accounts = await ethereum.request({ method: 'eth_accounts' });
  
  // if ( accounts === undefined) {
  
  //   document.getElementById("Wallet").value = "Connect" // accounts[0].substring(0,12) + "...";
  //   document.getElementById("chainSwitch").innerHTML = " No Chain ";
  // }
  // }
  
  
  async function switchChain(chains) {
  
    const FTM = [{ chainId: '0xfa'}];
    const BSC = [{ chainId: '0x38' }]; // BSC
    const POLY = [{ chainId: '0x89' }]; // MATIC
    const ETH = [{ chainId: '0x1' }];
    const FTMp = '0xfa';
    const BSCp = '0x38' ; // BSC
    const POLYp = '0x89' ; // MATIC
    const ETHp = '0x1' ;

    var chainsx = { "Binance" : BSC , "Polygon" : POLY , "Ethereum" : ETH , "Fantom" : FTM};
    var chainx = { "Binance" : BSCp , "Polygon" : POLYp , "Ethereum" : ETHp , "Fantom" : FTMp};

    var RPCchain = {'Binance' : 'https://bsc-dataseed.binance.org/' , 'Polygon' : 'https://rpc-mainnet.maticvigil.com/', 'Fantom' : 'https://rpc.ftm.tools/'}
    var symChain = {'Binance' : 'BNB', 'Polygon' : 'MATIC', 'Fantom' : 'FTM'}
    var expchain = {'Binance' : 'https://bscscan.com/', 'Polygon' : 'https://polygonscan.com/', 'Fantom' : 'https://ftmscan.com/'}

    
    await ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: chainsx[chains]
        }).catch(async (switchError) => {
                                  // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
                await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                                    { 
                                      chainId: chainx[chains], 
                                      chainName: chains, 
                                      nativeCurrency: {
                                                            name: chains,
                                                            symbol: symChain[chains],
                                                            decimals: 18
                                    }, 
                                      rpcUrls: [RPCchain[chains]], 
                                      blockExplorerUrls: [expchain[chains]]
                    }
                    
                    ]
                  });
  }
// handle other "switch" errors
})
    
ethereum.on('chainChanged', (_chainId) => window.location.reload());







 }
  
 
  
   async function callmepls() {
  
    const accounts = await ethereum.request({method: 'eth_accounts' });
    const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.alchemyapi.io/v2/UScvEF7bZREkyUNB1x1oUk_FcHQZA9RG"))
    var chainIDs = await ethereum.request({method: 'eth_chainId'});
      
    console.log(chainIDs + ' callmepls');
    
    var numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
   
  
    var addychain = {'Ethereum' : ethaddy, 'Polygon' : polyaddy, 'Binance': bscaddress, 'Fantom': '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc'}
  
    var capchain = {'Ethereum': 'ETH/USD', 'Polygon': 'MATIC/USD', 'Binance': 'BNB/USD', 'Fantom': 'FTM/USD'}
    var choosechain = numchain[chainIDs]
    var specie = {'Ethereum': 'img/ethereum-eth-logo.png', 'Polygon': 'img/polygon-matic-logo.png', 'Binance': 'img/binance-coin-bnb-logo.png', 'Fantom': 'img/fantom.png'}
  
    async function ringring() {
  
      var light = web3.eth.abi.encodeFunctionSignature('latestAnswer()')
  
      
  
  
     
    ethereum.request({
      method: 'eth_call',
      params: [{  
                 from: accounts[0],
                 to: addychain[choosechain], 
                 tag: 'latest', 
                 chainid: chainIDs,
                 data: light }]
    })
    .catch((err) => { if(err.code === 4001 ) 
      {console.log(err.code)}
                     }
            ).then(result => { if(result === undefined) {("#DeniedModal").modal('show');} else{
                          var data = result;                       
                          console.log(parseInt(data));
                          const pricex = 3000 / (parseInt(data) / 100000000);
                          
                          console.log('Smart Contract Address: ' + addychain[choosechain])
                          console.log("Latest " + capchain[choosechain] + " price was: " + parseInt(data)/ 100000000);
                          document.getElementById("Scalerx").innerHTML = `<img id = "specie"  src = ${specie[choosechain]} class=" bg-transparent " style = "position:relative; width: 30px; height: 30px; right: 5px; top: -5px;">` + pricex.toFixed(2);
                          document.getElementById("pro").innerHTML ='$3000';
                          document.getElementById('choose').innerHTML = numchain[chainIDs];
    
                                                                                        }
                      }
            );
    
                        };
  
  
  
    ringring();
  
  
                      };
  
  
  
         
       
  
  
 
  