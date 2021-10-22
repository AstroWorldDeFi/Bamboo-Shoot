// const { default: Web3 } = require("web3");

         async function change()
  {  
    
    
    
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
   
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    
    var chainIDs = await ethereum.request({method: 'eth_chainId'});
    var numchain = {'0x1': 'Ethereum', '0x3': 'Ropsten', '0x89': 'Polygon', '0x38': 'Binance'};
    var specie = {'Ethereum': 'img/ethereum-eth-logo.png', 'Polygon': 'img/polygon-matic-logo.png', 'Binance': 'img/binance-coin-bnb-logo.png'}

    
    console.log(accounts.length)
    if (accounts.length > 0 && numchain[chainIDs] != undefined ) {
      document.getElementById('specie').src = specie[numchain[chainIDs]]
    document.getElementById(numchain[chainIDs]).className += ' card-green'
    document.getElementById("Wallet").innerHTML= "Connected";
    document.getElementById("chainSwitch").disabled = false;
    document.getElementById("AWPass").disabled = false;
   
 } else if(accounts.length > 0 && numchain[chainIDs] == undefined) {
  
  document.getElementById("Wallet").innerHTML= "Unsupported";
  document.getElementById("AWPass").disabled = true;
  document.getElementById("AWPass").innerHTML = "Change Chain";
}

    else if(accounts.length < 0 && numchain[chainIDs] == undefined) {
        
      
    
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

