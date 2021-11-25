async function exitme() {
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var changenetworkimg = {'Ethereum': 'D76D827B2EC0E4F7.png', 'Polygon': 'D76D827B2EC0E52B.png', 'Binance': 'D76D827B2EC0E5D8.png', 'undefined': '../tuninfo/A7FBAA4060B9E0F7.png' };
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
 
  
  var binl = document.getElementById("binlit");
  var polyl = document.getElementById("polylit");
  var ethl = document.getElementById("ethlit");
  var chool = document.getElementById("ChooseS");
  var barl = document.getElementById("choolit");
  if (accounts.length > 0) {
   
   

    binl.style.display = "none";
  polyl.style.display = "none";
  ethl.style.display = "none";
  barl.style.display = "none";
    chool.href.baseVal = changenetworkimg[numchain[chainIDs]];
    

} else {
   
  binl.style.display = "none";
  polyl.style.display = "none";
  ethl.style.display = "none";
  barl.style.display = "none";
    chool.href.baseVal = "D76D827B2EC0E537.png";
    console.log('exiat');
    
  }
  
}

async function exitxme() {
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var changenetworkimg = {'Ethereum': 'D76D827B2EC0E4F7.png', 'Polygon': 'D76D827B2EC0E52B.png', 'Binance': 'D76D827B2EC0E5D8.png', 'undefined': '../tuninfo/A7FBAA4060B9E0F7.png' };
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};

  
  var chool = document.getElementById("ChooseS");

  
  if (accounts.length > 0) {

    
    chool.href.baseVal = changenetworkimg[numchain[chainIDs]];

} else {
 
    chool.href.baseVal = "D76D827B2EC0E5C3.png";
    console.log('exiat');
    
  }
  
}

async function exitmenu() {
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var changenetworkimg = {'Ethereum': 'D76D827B2EC0E506.png', 'Polygon': 'D76D827B2EC0E562.png', 'Binance': 'D76D827B2EC0E51B.png', 'undefined': '../tuninfo/A7FBAA4060B9E0F4.png' };
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};

  var chool = document.getElementById("ChooseS");
  
  if (accounts.length > 0) {
  
   
    chool.href.baseVal = changenetworkimg[numchain[chainIDs]];


} else {

  
    chool.href.baseVal = "D76D827B2EC0E565.png";
    console.log('meneat');
  }

  
}
// const { default: Web3 } = require("web3");

async function hoverbox() {

  ethereum.on('chainChanged', (_chainId) => window.location.reload());
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
  var changenetworkimg = {'Ethereum': 'D76D827B2EC0E506.png', 'Polygon': 'D76D827B2EC0E562.png', 'Binance': 'D76D827B2EC0E51B.png', 'undefined': '../tuninfo/A7FBAA4060B9E0F4.png' };

  var popbutton = {'undefined': 'D76D827B2EC0E51C.png', 'Binance': 'D76D827B2EC0E505.png', 'Polygon': 'D76D827B2EC0E545.png', 'Ethereum': 'D76D827B2EC0E51D.png'
  }
  var binl = document.getElementById("binlit");
  var polyl = document.getElementById("polylit");
  var ethl = document.getElementById("ethlit");
  var chool = document.getElementById("ChooseS");
  var barl = document.getElementById("choolit");
  var binlit = document.getElementById("BinanceSlit");
  var polylit = document.getElementById("PolygonSlit");
  var ethlit = document.getElementById("EthereumSlit");
  var barlit = document.getElementById("Choose_NetworkSlit");
  console.log(accounts.length);
  if (accounts.length > 0) {
  
    binl.style.display = "inline-block";
    polyl.style.display = "inline-block";
    ethl.style.display = "inline-block";
    barl.style.display = "inline-block";
  binlit.href.baseVal = 'D76D827B2EC0E505.png';
  polylit.href.baseVal = 'D76D827B2EC0E545.png';
  ethlit.href.baseVal = 'D76D827B2EC0E51D.png';
  barlit.href.baseVal = 'D76D827B2EC0E51C.png';
  chool.href.baseVal = changenetworkimg[numchain[chainIDs]];
    

} else if (accounts.length == 0) {
 
  binl.style.display = "inline-block";
  polyl.style.display = "inline-block";
  ethl.style.display = "inline-block";
  barl.style.display = "inline-block";
  binlit.href.baseVal = 'D76D827B2EC0E505.png';
  polylit.href.baseVal = 'D76D827B2EC0E545.png';
  ethlit.href.baseVal = 'D76D827B2EC0E51D.png';
  barlit.href.baseVal = 'D76D827B2EC0E51C.png';
  chool.href.baseVal = 'D76D827B2EC0E565.png';
    
    console.log('hoveat');
  } else if (accounts.length > 0 && numchain[chainIDs] == undefined){

    binl.style.display = "inline-block";
  polyl.style.display = "inline-block";
  ethl.style.display = "inline-block";
  barl.style.display = "inline-block";
  binlit.href.baseVal = 'D76D827B2EC0E505.png';
  polylit.href.baseVal = 'D76D827B2EC0E545.png';
  ethlit.href.baseVal = 'D76D827B2EC0E51D.png';
  barlit.href.baseVal = 'D76D827B2EC0E51C.png';
  chool.href.baseVal = '../tuninfo/A7FBAA4060B9E0F4.png';
  }
 
 
}
 

async function change() {  
    
  ethereum.on('chainChanged', (_chainId) => window.location.reload());
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom'};
  
  var changenetworkimg = {'Ethereum': 'D76D827B2EC0E5C7.png', 'Polygon': 'D76D827B2EC0E5C5.png', 'Binance': 'D76D827B2EC0E5D8.png'}
  var backchange = { 'Polygon': '286ABE565B35A551.png',
  'Binance': '286ABE565B35A553.png', 'Ethereum': '286ABE565B35A556.png'}   
  console.log(changenetworkimg[numchain[chainIDs]])
  if (accounts.length > 0 && numchain[chainIDs] != undefined ) {
    
   
          var bach = document.getElementById("xWallpaper");
          bach.href.baseVal = backchange[numchain[chainIDs]]; 
          var cotc = document.getElementById("ConnectC");
          var cotx = document.getElementById("ConnectX");
          var coto = document.getElementById("ConnectO");
          var chacho = document.getElementById("ChooseS");
          cotc.href.baseVal = "286ABE565B35A55E.png";
          cotx.href.baseVal = "286ABE565B35A55E.png";
          coto.href.baseVal = "286ABE565B35A55F.png";
          chacho.href.baseVal = changenetworkimg[numchain[chainIDs]];
       
     console.log(cotc.href.baseVal) 
  } else if(accounts.length > 0 && numchain[chainIDs] == undefined) {
      var bach = document.getElementById("xWallpaper");
      bach.href.baseVal = 'background.png'; 
      var chacho = document.getElementById("ChooseS");
      chacho.href.baseVal = '../tuninfo/A7FBAA4060B9E0F7.png';
     check();
  }  else if(accounts.length < 0 && numchain[chainIDs] == undefined) {
        check();
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
    var specie = {'Ethereum': 'ethereum-eth-logo.png', 'Polygon': 'polygon-matic-logo.png', 'Binance': 'binance-coin-bnb-logo.png', 'Fantom': 'fantom.png'}
  
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
            ).then(result => { if(result === undefined) {console.log(result)} else{
                          var data = result;                       
                          console.log(parseInt(data));
                          const pricex = 3000 / (parseInt(data) / 100000000);
                          
                          console.log('Smart Contract Address: ' + addychain[choosechain])
                          console.log("Latest " + capchain[choosechain] + " price was: " + parseInt(data)/ 100000000);
                          document.getElementById("xspecie").href.baseVal = specie[choosechain];
                          document.getElementById("Scalerx").innerHTML = pricex.toFixed(2);
                          document.getElementById("pro").innerHTML ='($3000)';
                          
    
                                                                                        }
                      }
            );
    
                        };
  
  
  
    ringring();
  
  
                      };
  
  
  
         
       
  
  
 
  