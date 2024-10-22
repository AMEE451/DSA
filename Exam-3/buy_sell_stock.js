
let arr = [7, 1, 5, 3, 6, 4,]

const buy_sell = (prices) => {
    let buy = Infinity
    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i]<buy) {
            buy = prices[i]
        }
        else if(prices[i]-buy>profit){
            profit=prices[i]-buy
        }
    }
  return profit
}
console.log(buy_sell(arr));