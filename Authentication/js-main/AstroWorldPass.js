
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
      })
      .catch((err) => { if(err.code === 4001) 
        {("#DeniedModal").modal('show'); }
        }
      ).then(result => { if(result === undefined) {("#DeniedModal").modal('show');} else{alert("Transaction Hash/Receipt: " + result)}});
      
                          };



      Astropass();
  
   
                        };

                        async function checkAstro() {
                          // Then get the currently selected radio button's value
                          console.log(window.ethereum)
                          
                          if (window.ethereum !== undefined || accounts.length > 0) {
                      // From now on, this should always be true:
                      // provider === window.ethereum
                      
                              console.log(window.ethereum); // initialize your app
                              astrosent();
                                                            } else {
                    
                               
                               ("#nowebModal").modal('show');
                      
                                            }
                    
                          // Check the value to make sure you want to show the modal
                         
                        }








           
         