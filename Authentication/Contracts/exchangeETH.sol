pragma solidity >=0.5.0 <0.8.0;

import "./SafeMath.sol";
contract exchangeETH{

function exchangeETHforMogul(uint256 ssizes, uint256 msizes, uint256 lsizes, uint256 xlsizes, uint256 xxlsizes) public payable returns(uint256, uint256) {
         
        uint256 cbought;
        uint256 ccbought;
        uint256 cccbought;
        uint256 xbought;
       
        uint256 balsend;
        
        
        
        
        basketMogul(msg.sender, ssizes, msizes, lsizes, xlsizes, xxlsizes); 
        cbought =  (ssizes + msizes);
        ccbought = (lsizes + xlsizes + xxlsizes);
        xbought = (cbought.add(ccbought));
        cccbought = (smallMogulSizes.amount + mediumMogulSizes.amount + largeMogulSizes.amount + xlargeMogulSizes.amount + xxlargeMogulSizes.amount);
        
        
        uint256 percentup = (xbought * 1000000000000000000 wei) / cccbought;
        uint256 Rate = 10000000000000000000 wei;
        /**uint256 NewRate = 10 * percentup;*/
        /**uint256 NewRate = 10 * percentup;*/
        uint256 NewRate = Rate + percentup;
        
        
    
        uint256 TotalBasketAmount = (xbought * NewRate);
        
        _mint(msg.sender, xbought);
        
        balsend = msg.sender.balance;
            
        require(balsend >= TotalBasketAmount , "You don't have enough Ether: Aborted");
        require(msg.value >= TotalBasketAmount, "Your not sending the correct amount to cover your balance");
        
        
        
        emit percentChange(NewRate);
        emit currentsupply(cccbought);
        emit sizesbought( xbought);
        emit bought(TotalBasketAmount);
        owner.transfer(msg.value);
        
        return(msg.value, TotalBasketAmount);
        
   }
   
   function exchangeETHforFilm(uint256 ssizes, uint256 msizes, uint256 lsizes, uint256 xlsizes, uint256 xxlsizes) public payable returns(uint256, uint256) {
         
        
        
        basketFilm(msg.sender, ssizes, msizes, lsizes, xlsizes, xxlsizes); 
         uint256 cbought =  (ssizes + msizes);
         uint256 ccbought = (lsizes + xlsizes + xxlsizes);
         uint256 xbought = (cbought.add(ccbought));
         uint256 cccbought = (smallFilmSizes.amount + mediumFilmSizes.amount + largeFilmSizes.amount + xlargeFilmSizes.amount + xxlargeFilmSizes.amount);
        
        
         uint256 percentup = (xbought * 1000000000000000000 wei) / cccbought;
        uint256 Rate = 10000000000000000000 wei;
        /**uint256 NewRate = 10 * percentup;*/
        /**uint256 NewRate = 10 * percentup;*/
        uint256 NewRate = Rate + percentup;
        
        
    
        uint256 TotalBasketAmount = (xbought * NewRate );
        _mint(msg.sender, xbought);
        
        uint256 balsend = msg.sender.balance;
            
        require(balsend >= TotalBasketAmount , "You don't have enough Ether: Aborted");
        require(msg.value >= TotalBasketAmount, "Your not sending the correct amount to cover your balance");
        
        
        emit percentChange(percentup);
        emit currentsupply(cccbought);
        emit sizesbought( xbought);
        emit bought(TotalBasketAmount);
        owner.transfer(msg.value);
        
        return(msg.value, TotalBasketAmount);
        
   }

    
    function shippingMogul(address _address, bool _shipping) public {
        
        require(msg.sender == owner, "You don't have authorization access");
        OrderInfo storage buyer = Inventory.order_info[_address];
        
        buyer.MogulShipped = _shipping;
        
        emit shippingstatusMogulchange(_shipping);
    }
    
     function shippingFilm(address _address,bool _shipping ) public {
        
        require(msg.sender == owner, "You don't have authorization access");
        OrderInfo storage buyer = Inventory.order_info[_address];
        
        buyer.FilmShipped = _shipping;
        
        emit shippingstatusFilmchange(_shipping);
    }
    
    function getOrderMogulInfo(address ins) view external returns ( uint,uint, bool) {
        return (order_info[ins].CanClaimMogul,order_info[ins].CanClaimMogulAmount, order_info[ins].MogulShipped);
    }
    
    function getOrderFilmInfo(address ins) view external returns ( uint, uint,bool) {
        return (order_info[ins].CanClaimFilm,order_info[ins].CanClaimFilmAmount, order_info[ins].FilmShipped);
    }
    
}
   