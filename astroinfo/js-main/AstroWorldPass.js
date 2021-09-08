
    async function astrosent() {

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/e750763a9cf54016972d72c12e48b2a9"))
      var AstroWorld = new web3.eth.Contract(astroworldabi, astroaddress);
    
  
      async function Astropass() {
  
        var AstroTestPass = web3.eth.abi.encodeFunctionSignature('AstroTestPass()')
  
        
  
  
       
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [{  
                   from: accounts[0],
                   to: astroaddress, 
                   tag: 'latest', 
                   chainid: '0x89',
                   data: AstroTestPass }]
      }).then(alert("After The Popup is accepted, your transaction hash should appear "))
      .catch((err) => { if(err.code === 4001) 
        {alert("Customer Denied Transaction Signature.."); }
        }
      ).then(result => { alert("Transaction Hash/Receipt: " + result)});
      
                          };



      Astropass();
  
   
                        };








           
         