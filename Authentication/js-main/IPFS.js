var layer = {"Polygon": "https://polygon-mainnet.g.alchemy.com/v2/HUk91ebxvzED1r4s37A1bRJNqawQSUfX", "Ethereum": "https://eth-mainnet.alchemyapi.io/v2/UScvEF7bZREkyUNB1x1oUk_FcHQZA9RG", "Ropsten": "https://eth-ropsten.alchemyapi.io/v2/2NyPkMknaZQdPYgkErIHduif2GV6lfPe", "Binance": "https://apis-sj.ankr.com/0dda88728b204ba69841f77f6dccf0ab/6e1aade2282802189d5e936c4d5f9130/binance/full/main"}

    

    

{% comment %} async function ipfsviewer() {

  const accounts = await ethereum.request({ method: 'eth_accounts' });
  var numchain = {'0x1': 'Ethereum', '0x3': 'Ropsten', '0x89': 'Polygon', '0x38': 'Binance'}
  var chainIDs = await ethereum.request({method: 'eth_chainId'})
  var layer = {"Polygon": "https://polygon-mainnet.g.alchemy.com/v2/HUk91ebxvzED1r4s37A1bRJNqawQSUfX", 
            "Ethereum": "https://eth-mainnet.alchemyapi.io/v2/UScvEF7bZREkyUNB1x1oUk_FcHQZA9RG", 
            "Ropsten": "https://eth-ropsten.alchemyapi.io/v2/2NyPkMknaZQdPYgkErIHduif2GV6lfPe", 
            "Binance": "https://apis-sj.ankr.com/0dda88728b204ba69841f77f6dccf0ab/6e1aade2282802189d5e936c4d5f9130/binance/full/main"
            }

  var newx = numchain[chainIDs];

  const web3 = new Web3(new Web3.providers.HttpProvider(layer[newx]));
  var AstWorld = new web3.eth.Contract(astroworldabi, astroaddress);
  var supply = await AstWorld.methods.tokenURI('1').call({from: "0x000000000000000000000000000000000000dead"});
  const hashipfs = supply.split("ipfs://")[1]
  const ipfslink = "https://ipfs.io/ipfs/"
  console.log(supply.split("ipfs://")[1])
  console.log(ethereum.isConnected())

   $.getJSON(ipfslink.concat(hashipfs), function(data) {
        
        var imagedata = data.image
        var newdata = imagedata.split("ipfs://")[1]
        var nftdata = ipfslink.concat(newdata)
        console.log(nftdata)          
        
        document.getElementById("nft").src = nftdata;
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("description").innerHTML = data.description;
       
        
    });

var layer = {"Polygon": "https://polygon-mainnet.g.alchemy.com/v2/HUk91ebxvzED1r4s37A1bRJNqawQSUfX", 
            "Ethereum": "https://eth-mainnet.alchemyapi.io/v2/UScvEF7bZREkyUNB1x1oUk_FcHQZA9RG", 
            "Ropsten": "https://eth-ropsten.alchemyapi.io/v2/2NyPkMknaZQdPYgkErIHduif2GV6lfPe", 
            "Binance": "https://apis-sj.ankr.com/0dda88728b204ba69841f77f6dccf0ab/6e1aade2282802189d5e936c4d5f9130/binance/full/main"
            };


 {% endcomment %}

    
  
  
  //   $.getJSON(layerapi[newx], function (data) {   
     
  //  var results = data.result[0]
  //  var text = results.hash
  //  console.log(text);
    
    //   const x = data.result.length;
       
    //   var results = data.result[parseInt(x-1)];
    //   console.log(results.hash);
     //  var hashx = results.hash;
    //   var gas = (parseInt(results.cumulativeGasUsed))/1000000000;
    //   var tid = results.tokenID;
    //   document.getElementById("hash").innerHTML = "TX HASH: " + hashx;
    //   document.getElementById("gas").innerHTML = "PRICE: " + gas;
    //   document.getElementById("TID").innerHTML = "TOKEN ID: " + tid;
            
  //  });

  async function checkAstro() {
    // Then get the currently selected radio button's value
    console.log(window.ethereum)
    
    if (window.ethereum !== undefined || accounts.length > 0) {
// From now on, this should always be true:
// provider === window.ethereum
        
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
    .catch((err) => { if(err.code === 4001 ) 
      {("#DeniedModal").modal('show'); }
      }
    ).then(result => { if(result === undefined) {("#DeniedModal").modal('show');} else{alert("Transaction Hash/Receipt: " + result)}});
    
                        };



    Astropass();

 
                      };








         
       
        console.log(window.ethereum); // initialize your app
       astrosent();
                                      } else {

         
         ("#nowebModal").modal('show');

                      }

    // Check the value to make sure you want to show the modal
   
  }

                  
  async function alogin () {

    var chainIDs = await ethereum.request({method: 'eth_chainId'});
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
    var passaddy = {'Ethereum': '0x4F1144fed48dC1eF6c98E05Ab96ad045dfbA2Ee0','Polygon': '0x8bD954b5EF48dC4ed326b7De587599d03a495491', 'Binance': '0xAC6de029f81aAAFB065E72a730612032d3d2f14C', 'Fantom': '0x3e3e660e23dcf096b2f35f78638c63f15a950b6d'}
    var verifypass = {'Ethereum': '0x4F1144fed48dC1eF6c98E05Ab96ad045dfbA2Ee0','Polygon': '0xF3A1A04e1b7CeE5Ca51b02d378562FaDaecFd279', 'Binance': '0xAC6de029f81aAAFB065E72a730612032d3d2f14C', 'Fantom': '0xAC6de029f81aAAFB065E72a730612032d3d2f14C'}
    const web3 = new Web3(window['ethereum']);
    
    
    
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
        { name: "chainId", type: "string" },
        { name: "name", type: "string" },   
        { name: "verifyingContract", type: "address" },
        { name: "version", type: "string" },
        ];
        
      const authentication = [
          {name:"VERIFY_ONCHAIN", type:"uint256"},
          {name: "TOKEN_ADDRESS", type: "address"},
          {name: "CHAIN_ID", type: "string"},
          {name: "VERSION", type: "string"},
          {name: "IDENTITY", type: "identity[]"},   
          ];

      const Astroian = [
          { name: "WALLET", type: "address"},
          { name: "MESSAGE", type: "string"}            
          ];
    
    
   

    
   
                        var params = [accounts[0], msgParams];
                        var method = 'eth_signTypedData_v4';
                        var from = accounts[0];


                        await web3.currentProvider.send(
                          {
                            method,
                            params,
                            from,
                          },
                          function (err, result) {
                            if (err) return console.dir(err);
                            if (result.error) {
                              $("#errorwebModal").modal('show');

                            }
                            if (result.error) return console.error('ERROR', result);
                            console.log('TYPED SIGNED:' + JSON.stringify(result.result));
                      
                            const recovered = sigUtil.recoverTypedSignature_v4({
                              data: JSON.parse(msgParams),
                              sig: result.result,
                            });
                      
                            if (
                              ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(accounts[0])
                            ) {
                              alert('Successfully recovered signer as ' + accounts[0]);
                            } else {
                              alert(
                                'Failed to verify signer when comparing ' + result + ' to ' + accounts[0]
                              );
                            }
                          }
                        );





