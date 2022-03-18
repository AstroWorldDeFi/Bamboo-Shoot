   
async function waitfun () {
    var chainIDs = await ethereum.request({method: 'eth_chainId'});
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const numchain = {'0x1' : 'Ethereum', '0x89' : 'Polygon', '0x38' : 'Binance', '0xfa' : 'Fantom'}
    var passaddy = {'Ethereum': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7','Polygon': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7', 'Binance': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7', 'Fantom': '0x97fB6806AcbA833c5Ca80135D7d75BF3794b9df7'}
    
  
    
    
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
    )
    if (NFT >= 1) {
      const hideFullScreenButton = "";
          const buildUrl = "Build";
          const loaderUrl = buildUrl + "/Webgame.loader.js";
          const config = {
            dataUrl: buildUrl + "/Webgame.data",
            frameworkUrl: buildUrl + "/Webgame.framework.js",
            codeUrl: buildUrl + "/Webgame.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "AstroWorld02",
            productVersion: "1.0",
          };
    
          const container = document.querySelector("#unity-container");
          const canvas = document.querySelector("#unity-canvas");
          const loadingCover = document.querySelector("#loading-cover");
          const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
          const progressBarFull = document.querySelector("#unity-progress-bar-full");
          const fullscreenButton = document.querySelector("#unity-fullscreen-button");
          const spinner = document.querySelector('.spinner');
    
          const canFullscreen = (function() {
            for (const key of [
                'exitFullscreen',
                'webkitExitFullscreen',
                'webkitCancelFullScreen',
                'mozCancelFullScreen',
                'msExitFullscreen',
              ]) {
              if (key in document) {
                return true;
              }
            }
            return false;
          }());
    
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            container.className = "unity-mobile";
            config.devicePixelRatio = 1;
          }
          loadingCover.style.display = "";
    
          const script = document.createElement("script");
          script.src = loaderUrl;
          script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
              spinner.style.display = "none";
              progressBarEmpty.style.display = "";
              progressBarFull.style.width = `${100 * progress}%`;
            }).then((unityInstance) => {
              loadingCover.style.display = "none";
              if (canFullscreen) {
                if (!hideFullScreenButton) {
                  fullscreenButton.style.display = "";
                }
                fullscreenButton.onclick = () => {
                  unityInstance.SetFullscreen(1);
                };
              }
            }).catch((message) => {
              alert(message);
            });
          };
          document.body.appendChild(script);
    } else {
      window.location.replace('../Authentication')
    
    };
    
    }
    
    waitfun();
    