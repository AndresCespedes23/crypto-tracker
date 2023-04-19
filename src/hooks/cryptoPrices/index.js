import { useEffect, useState } from "react";
export default function CryptoPrices(cryptoIds) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=ar"
      );
      const data = await response.json();
      setPrices(data);
    };
    fetchData();

    const intervalId = setINterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [cryptoIds]);
  return prices;
}
