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


async function change() {  
    
  ethereum.on('chainChanged', (_chainId) => window.location.reload());
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var chainIDs = await ethereum.request({method: 'eth_chainId'});
  var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom'};
  
  var changenetworkimg = {'Ethereum': 'D76D827B2EC0E5C7.png', 'Polygon': 'D76D827B2EC0E5C5.png', 'Binance': 'D76D827B2EC0E5D8.png', 'Fantom': 'A09AA111AB00D9D2.png'}
  var backchange = { 'Polygon': '286ABE565B35A551.png',
  'Binance': '286ABE565B35A553.png', 'Ethereum': '286ABE565B35A556.png', 'Fantom': 'A0923604F0F28582.png'}   
  var addybox = document.getElementById("addresstime");

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
          addybox.innerHTML = accounts[0].substring(0,4) + "..." + accounts[0].substring(36,40);
       
     console.log(cotc.href.baseVal) 
  } else if(accounts.length > 0 && numchain[chainIDs] == undefined) {
      addybox.innerHTML = accounts;
      var bach = document.getElementById("xWallpaper");
      bach.href.baseVal = ''; 
      var chacho = document.getElementById("ChooseS");
      addybox.innerHTML = accounts[0].substring(0,4) + "..." + accounts[0].substring(36,40);
      chacho.href.baseVal = 'A7FBAA4060B9E0F7.png';

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







};
  
 
  
   async function callmepls() {
  
    let accounts = await ethereum.request({method: 'eth_accounts' });
    let chainIDs = await ethereum.request({method: 'eth_chainId'});
      
    console.log(chainIDs + ' callmepls');
   console.log(window.ethereum)
    const numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
   
  
    const addychain = {'Ethereum' : '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419', 'Polygon' : polyaddy, 'Binance': bscaddress, 'Fantom': '0xf4766552D15AE4d256Ad41B6cf2933482B0680dc'};
  
    const capchain = {'Ethereum' : 'ETH/USD', 'Polygon' : 'MATIC/USD', 'Binance' : 'BNB/USD', 'Fantom' : 'FTM/USD'};
    let choosechain = numchain[chainIDs];
    console.log(choosechain)
    const specie = {'Ethereum': 'ethereum-eth-logo.png', 'Polygon': 'polygon-matic-logo.png', 'Binance': 'binance-coin-bnb-logo.png', 'Fantom': 'fantom.png'};
    console.log(addychain[choosechain]);
   
     
    await ethereum.request({
      method: 'eth_call',
      params: [{  
        from: accounts[0],        
        to: addychain[choosechain], 
                 chainid: chainIDs,
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
  
  
                    
                      async function astrosent() {

                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                        var chainIDs = await ethereum.request({method: 'eth_chainId'});
                        var passaddy = {'Polygon': astroaddress, 'Binance': '0x4Bc35353C087F14e226b90bdA1afeE99B8AEDB23', 'Fantom': '0x7214FE7771aB7ac68B0BE853bEa2d5855294A562'}
                        var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
                      
                      
                    
                        async function Astropass() {
                    
                    
                    
                    
                         
                        ethereum.request({
                          method: 'eth_sendTransaction',
                          params: [{  
                                     from: accounts[0],
                                     to: passaddy[numchain[chainIDs]], 
                                     tag: 'latest', 
                                     chainid: chainIDs,
                                     data: '0x3b80fb19'}]
                        })
                        .catch((err) => { if(err.code === 4001) 
                          {("#DeniedModal").modal('show'); }
                          }
                        ).then(result => { if(result === undefined) {("#DeniedModal").modal('show');} else{alert("Transaction Hash/Receipt: " + result)}});
                        
                                            };
                  
                  
                  
                        Astropass();
                    
                     
                                          };
         
       
  
  
 
  