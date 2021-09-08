
/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.


// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
async function change()
  {  
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const balance = await ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] })
    document.getElementById("Wallet").value= accounts[0].substring(0,12) + "...";
    document.getElementById("liveornot").style = "font-size:8px;color:green";
    
  }

async function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        
        document.getElementById("Wallet").value=  "Rejected Connection";
        document.getElementById("liveornot").style = "font-size:8px;color:Yellow";
      } else {
        console.error(err);
      }
    });

  

    
}



function clickAgain() {  
    
  document.getElementById("Wallet").value= "Show Address";
  document.getElementById("liveornot").style = "font-size:8px;color:yellow";
  
}

  


  const getContract = async (web3) => {
    const data = await $.getJSON("bin/src/Inventory.json");
  
    const netId = await web3.eth.net.getId();
    const deployedNetwork = data.networks[netId];
    const inventory = new web3.eth.Contract(
      data.abi,
      deployedNetwork && deployedNetwork.address
    );
    return inventory;
  };