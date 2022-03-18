// const { default: Web3 } = require("web3");
async function changeup() {  
    
  ethereum.on('chainChanged', (_chainId) => window.location.reload());
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom'};
  var specie = {'Ethereum': 'img/ethereum-eth-logo.png', 'Polygon': 'img/polygon-matic-logo.png', 'Binance': 'img/binance-coin-bnb-logo.png', 'Fantom': 'img/fantom.png'}
    
  console.log(accounts.length)
  if (accounts.length > 0 && numchain[chainIDs] != undefined ) {

    document.getElementById('choose').innerHTML = numchain[chainIDs]
    document.getElementById(numchain[chainIDs]).className += ' card-green'

  } else if(accounts.length > 0 && numchain[chainIDs] == undefined) {
     document.getElementById("AWPass").innerHTML = "Change Chain";
  }  else if(accounts.length < 0 && numchain[chainIDs] == undefined) {
        document.getElementById("AWPass").disabled = false;
    }
}
      
      async function checkup() {
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
   
       async function xlogin () {

var chainIDs = await ethereum.request({method: 'eth_chainId'});
const accounts = await ethereum.request({ method: 'eth_accounts' });
const numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
var passaddy = '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7';
var RPCchain = {'Ethereum': 'https://eth-mainnet.alchemyapi.io/v2/UScvEF7bZREkyUNB1x1oUk_FcHQZA9RG', 'Binance' : 'https://bsc-dataseed1.ninicoin.io/' , 'Polygon' : 'https://polygon-mainnet.g.alchemy.com/v2/HUk91ebxvzED1r4s37A1bRJNqawQSUfX', 'Fantom' : 'https://rpc.ftm.tools/'}
const createAlchemyWeb3 = AlchemyWeb3.createAlchemyWeb3;
const web3 = createAlchemyWeb3(RPCchain[numchain[chainIDs]],);
const messageHash = web3.utils.fromUtf8('Verifying your entrance into AstroWorld!');


signature = await ethereum.request({
 method: 'personal_sign',
 params: [      
   accounts[0],
   messageHash
           ]
});


var enco = "0x70a08231" + "000000000000000000000000" + accounts[0].substring(2);


var NFT = await ethereum.request({

 method: 'eth_call',
 params: [{  
   to: passaddy,
   chainid: chainIDs,
   data: enco,
  }, 'latest']
})
.catch((err) => { 
  if(err.code === -32603) 
 {
   
   $("#errorwebModal").modal('show');

  }

 
  if(err.code === -32000) 
 {
   
   $("#errorwebModal").modal('show');

  }
 }
)

console.log(enco);

if (NFT >= 1) {

 window.location.replace("../Enter");

} else {

 $("#nowebModal2").modal('show');

};
}
  
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
  
  
  
         
       
  
  
 
                      async function flagthechain () {
                        var chainIDs = await ethereum.request({method: 'eth_chainId'});
                        var numchain = {'0x38': 'Binance', '0xfa': 'Fantom'};
                      
                      
                        if (numchain[chainIDs] !== undefined) 
                        {
                          var onlymod = document.getElementById("only");
                          onlymod.style.display = "Block";
                        } 
                      }
                      
                      async function flagit () {
                      
                          var onlymod = document.getElementById("only");
                          onlymod.style.display = "None";
                      
                      } 
                      async function exitme() {
                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                        var chainIDs = await ethereum.request({method: 'eth_chainId'});
                        var changenetworkimg = {'Ethereum': 'D76D827B2EC0E4F7.png', 'Polygon': 'D76D827B2EC0E52B.png', 'Binance': 'D76D827B2EC0E5D8.png', 'Fantom': 'A09AA111AB00D9D2.png', 'undefined': 'A7FBAA4060B9E0F7.png' };
                        var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
                       
                        
                        var binl = document.getElementById("binlit");
                        var polyl = document.getElementById("polylit");
                        var ethl = document.getElementById("ethlit");
                        var chool = document.getElementById("ChooseS");
                        var barl = document.getElementById("choolit");
                        var fanl = document.getElementById("fanlit");
                        if (accounts.length > 0) {
                         
                         
                      
                          binl.style.display = "none";
                        polyl.style.display = "none";
                        ethl.style.display = "none";
                        barl.style.display = "none";
                        fanl.style.display = "none";
                          chool.href.baseVal = changenetworkimg[numchain[chainIDs]];
                          
                      
                      } else {
                         
                        binl.style.display = "none";
                        polyl.style.display = "none";
                        ethl.style.display = "none";
                        barl.style.display = "none";
                        fanl.style.display = "none";
                        chool.href.baseVal = "D76D827B2EC0E537.png";
                        console.log('exiat');
                          
                        }
                        
                      }
                      async function exitxme() {
                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                        var chainIDs = await ethereum.request({method: 'eth_chainId'});
                        var changenetworkimg = {'Ethereum': 'D76D827B2EC0E4F7.png', 'Polygon': 'D76D827B2EC0E52B.png', 'Binance': 'D76D827B2EC0E5D8.png', 'Fantom': 'A09AA111AB00D9D2.png', 'undefined': 'A7FBAA4060B9E0F7.png' };
                        var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
                      
                        
                        var chool = document.getElementById("ChooseS");
                       
                        
                        if (accounts.length > 0) {
                        
                          
                          chool.href.baseVal = changenetworkimg[numchain[chainIDs]];
                      
                      } else {
                        
                          chool.href.baseVal = "D76D827B2EC0E537.png";
                          console.log('exiat');
                          
                        }
                        
                      }
                         async  function exitmenu() {
                        
                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                        var chainIDs = await ethereum.request({method: 'eth_chainId'});
                        var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
                       
                        var chool = document.getElementById("ChooseS");
                        
                        var changenetworkimg = { 'Ethereum': 'D76D827B2EC0E506.png', 'Polygon': 'D76D827B2EC0E562.png', 'Binance': 'D76D827B2EC0E51B.png', 'Fantom': 'A09AA111AB00D9D3.png', 'undefined': 'A7FBAA4060B9E0F4.png' };
                      
                        if (accounts.length > 0) {
                          
                          
                          chool.href.baseVal = changenetworkimg[numchain[chainIDs]];
                      
                      
                      } else{
                       
                          
                          chool.href.baseVal = "D76D827B2EC0E565.png";
                          console.log('meneat');
                        }
                      }
                      
                      async function hoverbox() {
                      
                        ethereum.on('chainChanged', (_chainId) => window.location.reload());
                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                        var chainIDs = await ethereum.request({method: 'eth_chainId'});
                        var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
                        var changenetworkimg = {'Ethereum': 'D76D827B2EC0E506.png', 'Polygon': 'D76D827B2EC0E562.png', 'Binance': 'D76D827B2EC0E51B.png', 'Fantom': 'A09AA111AB00D9D2.png', 'undefined': 'A7FBAA4060B9E0F4.png'};
                      
                        
                        var fanl = document.getElementById("fanlit");
                        var binl = document.getElementById("binlit");
                        var polyl = document.getElementById("polylit");
                        var ethl = document.getElementById("ethlit");
                        var chool = document.getElementById("ChooseS");
                        var barl = document.getElementById("choolit");
                        var binlit = document.getElementById("BinanceSlit");
                        var polylit = document.getElementById("PolygonSlit");
                        var ethlit = document.getElementById("EthereumSlit");
                        var barlit = document.getElementById("Choose_NetworkSlit");
                        var fanlit = document.getElementById("FantomLit");
                        
                        console.log(accounts.length);
                        if (accounts.length > 0) {
                        
                        binl.style.display = "inline-block";
                        polyl.style.display = "inline-block";
                        ethl.style.display = "inline-block";
                        barl.style.display = "inline-block";
                        fanl.style.display = "inline-block";
                        
                        binlit.href.baseVal = 'A0923604F0F28584.png';
                        polylit.href.baseVal = 'A0923604F0F28587.png';
                        ethlit.href.baseVal = 'A0923604F0F28585.png';
                        barlit.href.baseVal = 'A0923604F0F2858B.png';
                        fanlit.href.baseVal = '3521CEB6D30D4CB8.png';
                        chool.href.baseVal = changenetworkimg[numchain[chainIDs]];
                          
                      
                      } else if (accounts.length == 0) {
                       
                        binl.style.display = "inline-block";
                        polyl.style.display = "inline-block";
                        ethl.style.display = "inline-block";
                        barl.style.display = "inline-block";
                        fanl.style.display = "inline-block";
                        
                        binlit.href.baseVal = 'A0923604F0F28584.png';
                        polylit.href.baseVal = 'A0923604F0F28587.png';
                        ethlit.href.baseVal = 'A0923604F0F28585.png';
                        barlit.href.baseVal = 'A0923604F0F2858B.png';
                        fanlit.href.baseVal = '3521CEB6D30D4CB8.png';
                      
                        chool.href.baseVal = 'D76D827B2EC0E565.png';
                          
                          console.log('hoveat');
                        } else if (accounts.length > 0 && numchain[chainIDs] == undefined){
                      
                        binl.style.display = "inline-block";
                        polyl.style.display = "inline-block";
                        ethl.style.display = "inline-block";
                        barl.style.display = "inline-block";
                        fanl.style.display = "inline-block";
                        
                        binlit.href.baseVal = 'A0923604F0F28584.png';
                        polylit.href.baseVal = 'A0923604F0F28587.png';
                        ethlit.href.baseVal = 'A0923604F0F28585.png';
                        barlit.href.baseVal = 'A0923604F0F2858B.png';
                        fanlit.href.baseVal = '3521CEB6D30D4CB8.png';
                      
                        chool.href.baseVal = 'A7FBAA4060B9E0F4.png';
                        }
                       
                      }
                      async function blackout() {
                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                      
                        if (accounts[0] === undefined) {
                          var chool = document.getElementById("ChooseS");
                        
                          var cotc = document.getElementById("ConnectC");
                          var cotx = document.getElementById("ConnectX");
                          var coto = document.getElementById("ConnectO");
                          var addybox = document.getElementById("addresstime");
                          var lifx = document.getElementById("Lifetimex")
                          var lifo = document.getElementById("Lifetimeo")
                          var lifxo = document.getElementById("Lifetimexo")
                          var feax = document.getElementById("FeaturesTaskbarx")
                          var feao = document.getElementById("FeaturesTaskbaro")
                          var feaxo = document.getElementById("FeaturesTaskbarxo")
                      
                          addybox.innerHTML = "";
                      
                          chool.href.baseVal = 'D76D827B2EC0E5C3.png';
                          cotc.href.baseVal = "286ABE565B35A55D.png";
                          coto.href.baseVal = "286ABE565B35A552.png"
                          cotx.href.baseVal = "286ABE565B35A55D.png"
                          
                      
                      
                        } else {
                          var addybox = document.getElementById("addresstime");
                      
                          addybox.innerHTML = accounts[0].substring(0,4) + "..." + accounts[0].substring(36,40);
                      
                        }
                        
                      
                      } 
                      
                      
              
                         
                            async function checkered() {
                              // Then get the currently selected radio button's value
                            
                                // Then get the currently selected radio button's value
                                
                          
                                if (window.ethereum !== undefined) {
                            // From now on, this should always be true:
                            // provider === window.ethereum
                            ethereum
                            .request({ method: 'eth_requestAccounts' })
                            .then(change())
                            .catch((err) => {
                              if (err.code === 4001) {
                                // EIP-1193 userRejectedRequest error
                                // If this happens, the user rejected the connection request.
                                console.log('Please connect to MetaMask.');
                                
                                
                              } else {
                                console.error(err);
                              }
                            }).then((result) => {change(); astrosent()});
                        
                        
                                                                  } else {
                          
                                    
                                     $("#nowebModal").modal('show');
                            
                                                                  }
                          
                                // Check the value to make sure you want to show the modal
                               
                              
                            }
                            async function checkeredx() {
                              // Then get the currently selected radio button's value
                            
                                // Then get the currently selected radio button's value
                                
                          
                                if (window.ethereum !== undefined) {
                            // From now on, this should always be true:
                            // provider === window.ethereum
                            ethereum
                            .request({ method: 'eth_requestAccounts' })
                            .then(changeup())
                            .catch((err) => {
                              if (err.code === 4001) {
                                // EIP-1193 userRejectedRequest error
                                // If this happens, the user rejected the connection request.
                                console.log('Please connect to MetaMask.');
                                
                                
                              } else {
                                console.error(err);
                              }
                            }).then((result) => {xlogin();
                              
                              });
                        
                        
                                                                  } else {
                          
                                    
                                     $("#nowebModal").modal('show');
                            
                                                                  }
                          
                                // Check the value to make sure you want to show the modal
                               
                              
                            }
                                                   async function connect() {
                        
                        
                        ethereum
                          .request({ method: 'eth_requestAccounts' })
                          .then(changeup)
                          .catch((err) => {
                            if (err.code === 4001) {
                              // EIP-1193 userRejectedRequest error
                              // If this happens, the user rejected the connection request.
                              console.log('Please connect to MetaMask.');
                              
                              
                            } else {
                              console.error(err);
                            }
                          });
                        
                         
                        
                            
                         
                          
                        
                          
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
                      
                      
                      
                      
                      
                      
                      
                      };

                                                    
async function alogin () {

  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  const numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
  var passaddy = {'Ethereum': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7','Polygon': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7', 'Binance': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7', 'Fantom': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7'}
  var verifypass = {'Ethereum': '0x4F1144fed48dC1eF6c98E05Ab96ad045dfbA2Ee0','Polygon': '0xF3A1A04e1b7CeE5Ca51b02d378562FaDaecFd279', 'Binance': '0xAC6de029f81aAAFB065E72a730612032d3d2f14C', 'Fantom': '0x5613d52C04eb778B6414D6aD07183f9E7443985A'}
  const web3 = new Web3(window['ethereum']);
  const VERIFY_CONTRACT = new web3.eth.Contract(onchain_did, FTM_DID_ADDRESS);

  
  var enco = "0x70a08231" + "000000000000000000000000" + accounts[0].substring(2);
  
  var NFT = await ethereum.request({
    method: 'eth_call',
    params: [{  
      to: passaddy[numchain[chainIDs]],
      chainid: chainIDs,
      data: enco,
     }, 'latest']
    })
    .catch((err) => { 
     if(err.code === -32603) 
    {
      
      $("#errorwebModal").modal('show');
    
     }
    
    
     if(err.code === -32000) 
    {
      
      $("#errorwebModal").modal('show');
    
     }
    }
    );        
  
  
  const domain = [
  { name: "chainId", type: "uint256" },
  { name: "name", type: "string" },   
  { name: "verifyingContract", type: "address" },
  { name: "version", type: "string" },
  ];
  
  const authentication = [
    {name:"VERIFY_ONCHAIN", type:"uint256"},
    {name: "TOKEN_ADDRESS", type: "address"},
    {name: "CHAIN_ID", type: "uint256"},
    {name: "VERSION", type: "string"},
    {name: "MESSAGE", type: "string"},
    {name: "WALLET", type: "address"} 
    ];
    
    
    
    const typedData = JSON.stringify({
      types: {
          EIP712Domain: [
              { name: 'name', type: 'string' },
              { name: 'version', type: 'string' },
              { name: 'chainId', type: 'uint256' },
              { name: 'verifyingContract', type: 'address' },
          ],
          authentication: [
              {name:"VERIFY_ONCHAIN", type:"uint256"},
              {name: "TOKEN_ADDRESS", type: "address"},
              {name: "CHAIN_ID", type: "uint256"},
              {name: "VERSION", type: "string"},
              {name: "MESSAGE", type: "string"},
              {name: "WALLET", type: "address"} 
              ]
      },
      primaryType: 'authentication',
      domain: {
          name: "https://astroworld.io/Authentication",
          // Just let's you know the latest version. Definitely make sure the field name is correct.
          version: "GREASED_LIGHTNING" ,
          // Defining the chain aka Rinkeby testnet or Ethereum Main Net
          chainId: web3.utils.hexToNumber(chainIDs),
          // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
          verifyingContract: passaddy[numchain[chainIDs]],
  
      },
      message: {
          /*
           - Anything you want. Just a JSON Blob that encodes the data you want to send
           - No required fields
           - This is DApp Specific
           - Be as explicit as possible when building out the message schema.
          */
      VERIFY_ONCHAIN: web3.utils.hexToNumber(NFT), 
      TOKEN_ADDRESS: passaddy[numchain[chainIDs]],
      CHAIN_ID: web3.utils.hexToNumber(chainIDs),
      VERSION: "GREASED_LIGHTNING",
      MESSAGE: 'Verifying your entrance into AstroWorld!',
      WALLET: accounts[0] 
      }});
  
  
                              
  var signaturex = await ethereum.request({
  method: 'eth_signTypedData_v3',
                        params: [  
                        accounts[0],
                        typedData]
  }).catch((err) => { 
   if(err.code === -32603) 
  {
    
    $("#errorwebModal").modal('show');
  
   }
  
  
   if(err.code === -32000) 
  {
    
    $("#errorwebModal").modal('show');
  
   }})
  
  
  console.log(web3.utils.hexToNumber(NFT));
  console.log(passaddy[numchain[chainIDs]]);
  console.log(web3.utils.hexToNumber(chainIDs));
  console.log(accounts[0]);

  const params = [
      web3.utils.hexToNumber(NFT), 
      passaddy[numchain[chainIDs]],
      web3.utils.hexToNumber(chainIDs),
      "GREASED_LIGHTNING",
      'Verifying your entrance into AstroWorld!',
      accounts[0]        
  ];
  const signature = signaturex.substring(2);
  const V_PARSE = parseInt(signature.substring(128, 130), 16);
  const R_SIG = "0x" + signature.substring(0, 64);
  const S_SIG = "0x" + signature.substring(64, 128);

  console.log(V_PARSE);
  console.log(R_SIG);
  console.log(S_SIG);



await VERIFY_CONTRACT.methods.verify(params, V_PARSE, R_SIG, S_SIG, accounts[0]).call({from: accounts[0]}).catch((err) => { 
  if(err.code === -32603) 
  {
    
    $("#errorwebModal").modal('show');
  
   }
  
  
   if(err.code === -32000) 
  {
    
    $("#errorwebModal").modal('show');
  
   }
  }
  ).then((result) => async function() {
    console.log(result)
    

    const signer = await web3.eth.personal.ecRecover([params, V_PARSE,R_PARSE,S_PARSE], signature);
    console.log(signer);
  if (signer ===  accounts[0]) {
    window.location.replace("../Enter")
  } else {
    $("#nowebModal2").modal('show');
  
  };
  })}
  
  



                    
 
  
                    
              
  
                         
                        
                         async function callmepls() {
                          let chainIDs = await ethereum.request({method: 'eth_chainId'});
                            
                          console.log(chainIDs + ' callmepls');
                          const numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
                         
                        
                          const addychain = {'Ethereum' : '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419', 'Polygon' : polyaddy, 'Binance': bscaddress, 'Fantom': '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc'};
                        
                          const capchain = {'Ethereum' : 'ETH/USD', 'Polygon' : 'MATIC/USD', 'Binance' : 'BNB/USD', 'Fantom' : 'FTM/USD'};
                          let choosechain = numchain[chainIDs];
                          console.log(choosechain)
                          const specie = {'Ethereum': 'ethereum-eth-logo.png', 'Polygon': 'polygon-matic-logo.png', 'Binance': 'binance-coin-bnb-logo.png', 'Fantom': 'fantom.png'};
                          console.log(addychain[choosechain]);
                         
                           
                          await ethereum.request({
                            method: 'eth_sign',
                            params: [{        
                              accounts,
                              data: '0x50d25bcd'
                                       }, "latest"]
                          })
                          .catch((err) => { if(err.code === 4001 ) 
                            {console.log(err.code)} else if (err.code === -32000){console.log(err)}
                                           }
                                  ).then(result => { if(result === undefined) {console.log(result)} else{
                                                var data = result;                       
                                                console.log(parseInt(data));
                                                const pricex = 3000 / (parseInt(data) / 100000000);
                                                
                                                console.log('Smart Contract Address: ' + addychain[choosechain])
                                                console.log("Latest " + capchain[choosechain] + " price was: " + parseInt(data)/ 100000000);
                                                document.getElementById("xspecie").href.baseVal = specie[choosechain];
                                                document.getElementById("Scalerx").innerHTML = pricex.toFixed(2);
                                                
                          
                                                                                                              }
                                            }
                                  );
                          
                                              };
                       
                                          
                                              async function astrologin() {
                      
                                                const accounts = await ethereum.request({ method: 'eth_accounts' });
                                                var chainIDs = await ethereum.request({method: 'eth_chainId'});
                                                var passaddy = {'Ethereum': '0x4F1144fed48dC1eF6c98E05Ab96ad045dfbA2Ee0','Polygon': '0x72943230DcD2feC709a04a59C8e117B8a0Ed348D', 'Binance': '0x9571D474F9d4076E97655939fce6Ed383909A7f2', 'Fantom': '0x6Ba656e7153f2d41bd3C645C03E9d56e0DFF930F'}
                                                var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
                                                const addychain = {'Ethereum' : '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419', 'Polygon' : polyaddy, 'Binance': bscaddress, 'Fantom': '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc'};
                                                const scanchain = {'0x1': 'https://etherscan.io/tx/', '0x89': 'https://polygonscan.com/tx/', '0x38': 'https://bscscan.com/tx/', '0xfa': 'https://ftmscan.com/tx/'};
                                                const logochain = {'0x1': 'ETHERSCAN', '0x89': 'POLYSCAN', '0x38': 'BSCSCAN', '0xfa': 'FTMSCAN'};
                                                let choosechain = numchain[chainIDs];
                                                var signature = await ethereum.request({
                                                method: 'eth_sign',
                                                params: [{  
                                                from: accounts[0],
                                                to: addychain[choosechain],  
                                                chainid: chainIDs,
                                                data: '0x50d25bcd'}, 'latest']
                                                })
                                                .catch((err) => { if(err.code === 4001 ) 
                                                {console.log(err.code)}
                                                }
                                                ).then(result => { if(result === undefined) {console.log(result)} else{
                                                const web3 = new Web3(new Web3.providers.HttpProvider("https://cloudflare-eth.com"))
                                                
                                                var data = result;                       
                                                console.log(parseInt(data));
                                                const pricex = (3000) / (parseInt(data) / 100000000);
                                                var xrate = web3.utils.toWei(String(pricex), 'ether');
                                                var Rate = web3.utils.numberToHex(xrate);
                                                var tip = web3.utils.toWei("1", 'gwei');
                                                var gasup = web3.utils.numberToHex(700000);
                                                var gasxup = web3.utils.numberToHex(270987);
                                                var tipup = web3.utils.numberToHex(1500000000);
                                                
                                                console.log(xrate);
                                                async function workitx () { 
                                                  console.log(chainIDs)
                                        if (chainIDs === "0x1") {
                                              
                                                    await ethereum.request({
                      
                                                    method: 'eth_sendTransaction',
                                                    params: [{  
                                                      from: accounts[0],
                                                      to: passaddy[numchain[chainIDs]],
                                                      chainid: chainIDs,
                                                      maxPriorityFeePerGas: tipup,
                                                      gas: gasxup,
                                                      data: '0x7fc83d0b',
                                                     value: Rate}, 'latest']
                                                  })
                                                  .catch((err) => { 
                                                     if(err.code === -32603) 
                                                    {
                                                      
                                                      var errmod = document.getElementById("errormodal");
                                                      
                                                      errmod.style.display = "block";
                                                     }
                                                  
                                                    
                                                     if(err.code === -32000) 
                                                    {
                                                      
                                                      var errmod = document.getElementById("errormodal");
                                                      
                                                      errmod.style.display = "block";
                                                     }
                                                    }
                                                  ).then(result => { 
                                                    if(result === undefined) {
                                                       // try again in 2 seconds
                                                  
                                                       
                                                  } else {
                                                  
                                                    
                                                     var addhash = result;
                                                  
                                                     async function sucwin() {
                                                      var readme = await ethereum.request({
                                                        method: 'eth_getTransactionReceipt',
                                                        params: [result]
                                                       })
                                                       if (readme === null) {
                                                         sucwin() }
                                                         else  {
                                                          console.log(readme['status']);
                                                          if(readme['status'] === '0x1') {
                                                          var linkchain = document.getElementById("popxlink");
                                                          linkchain.href.baseVal = scanchain[chainIDs] + addhash;
                                                          var imagelink = document.getElementById(logochain[chainIDs]);
                                                          imagelink.style.display = "block";
                                                          linkchain.style.display = "block";
                                                          console.log(readme['logs'])
                                                        } else {
                                                          
                                                       var errmod = document.getElementById("errormodal");
                                                      
                                                       errmod.style.display = "block";
                                                        }
                                                          
                                                         }
                                                      
                                                      }
                                                  
                                                     
                                                  
                                                      sucwin();
                                                  
                                                              
                                                    }
                                                  }
                                                  
                                                  )
                                                 
                                                
                                                } else if (chainIDs !== "0x1" ) {
                                                  await  ethereum.request({
                      
                                                    method: 'eth_sendTransaction',
                                                    params: [{  
                                                      from: accounts[0],
                                                      to: passaddy[numchain[chainIDs]],
                                                      chainid: chainIDs,
                                                      gas: gasup,
                                                      data: '0x7fc83d0b',
                                                     value: Rate}, 'latest']
                                                  })
                                                  .catch((err) => { 
                                                     if(err.code === -32603) 
                                                    {
                                                      
                                                      var errmod = document.getElementById("errormodal");
                                                      
                                                      errmod.style.display = "block";
                                                     }
                                                  
                                                    
                                                     if(err.code === -32000) 
                                                    {
                                                      
                                                      var errmod = document.getElementById("errormodal");
                                                      
                                                      errmod.style.display = "block";
                                                     }
                                                    }
                                                  ).then(result => { 
                                                    if(result === undefined) {
                                                       // try again in 2 seconds
                                                  
                                                       
                                                  } else {
                                                  
                                                    
                                                     var addhash = result;
                                                  
                                                     async function sucwin() {
                                                      var readme = await ethereum.request({
                                                        method: 'eth_getTransactionReceipt',
                                                        params: [result]
                                                       })
                                                       if (readme === null) {
                                                         sucwin() }
                                                         else  {
                                                          console.log(readme['status']);
                                                          if(readme['status'] === '0x1') {
                      
                                                          var linkchain = document.getElementById("popxlink");
                                                          linkchain.href.baseVal = scanchain[chainIDs] + addhash;
                                                          var imagelink = document.getElementById(logochain[chainIDs]);
                                                          imagelink.style.display = "block";
                                                          var successmod = document.getElementById("successexittoo");
                                                          successmod.style.display = "block";
                                                          console.log(readme['logs'].logIndex);
                                                        } else {
                                                          
                                                       var errmod = document.getElementById("errormodal");
                                                      
                                                       errmod.style.display = "block";
                                                        }
                                                          
                                                         }
                                                      
                                                      }
                                                  
                                                     
                                                  
                                                      sucwin();
                                                  
                                                              
                                                    }
                                                  }
                                                  
                                                  )
                                                }
                                                          
                                              }
                                              workitx();
                      
                                            } 
                      
                                              }
                                              );
                                              };
                                              