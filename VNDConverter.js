javascript:(function(){
var symbol = document.querySelectorAll('.a-price-symbol, .a-color-price');
for (i = 0; i < symbol.length; i++) {
	symbol[i].innerHTML = symbol[i].innerHTML.replace(/￥/g,'₫');
}

var price = document.querySelectorAll(".a-price-whole, .a-color-price");
for (i = 0; i < price.length; i++) {
	var foo = price[i].innerText.match(/\d+,*\d+/);
  if(foo){
	var dnum =  foo[0].replace(',','') * 200;
	price[i].innerText = price[i].innerText.replace(/\d+,*\d+/,String(dnum).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
  }
}
})();