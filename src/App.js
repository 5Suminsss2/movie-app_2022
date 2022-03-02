import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  //코인 api는 이 서비스가 시작될때 한번만 실행되길 원해
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      //코인 가져오면 로딩 멈추기
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ): (
      <select>
        {coins.map((coin) => (
          <option>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>
        ))}
      </select>)}
      
    </div>
  );
}

export default App;
