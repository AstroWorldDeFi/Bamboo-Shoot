
    async function binsent () {


    }
    async function astrosent() {

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      var web3http = {'Ethereum': " ", 'Polygon': 'https://polygon-mainnet.infura.io/v3/e750763a9cf54016972d72c12e48b2a9', 'Binance': 'https://apis-sj.ankr.com/0dda88728b204ba69841f77f6dccf0ab/6e1aade2282802189d5e936c4d5f9130/binance/full/main', 'Fantom': 'https://apis-sj.ankr.com/06f3fe61ad984b559d09ecb0abc5b22c/6e1aade2282802189d5e936c4d5f9130/fantom/full/main'}
      var chainIDs = await ethereum.request({method: 'eth_chainId'});
      var passaddy = {'Polygon': astroaddress, 'Binance': '0x4Bc35353C087F14e226b90bdA1afeE99B8AEDB23', 'Fantom': '0x7214FE7771aB7ac68B0BE853bEa2d5855294A562'}
      var numchain = {'0x1': 'Ethereum', '0x89': 'Polygon', '0x38': 'Binance', '0xfa': 'Fantom', '0x': 'undefined', 'null': 'undefined', 'undefined': 'undefined'};
    
      const web3 = new Web3(new Web3.providers.HttpProvider(web3http[numchain[chainIDs]]))
    
  
      async function Astropass() {
  
        var AstroTestPass = web3.eth.abi.encodeFunctionSignature('AstroTestPass()')
  
        
  
  
       
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [{  
                   from: accounts[0],
                   to: passaddy[numchain[chainIDs]], 
                   tag: 'latest', 
                   chainid: chainIDs,
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








           
         