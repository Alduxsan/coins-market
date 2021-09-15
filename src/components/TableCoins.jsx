import React from 'react'
import { CoinRow } from './CoinRow'

const titles = ['#', 'Coin', 'Price', 'Price Change', '24hs Volume']

export function Tablecoins(props) {
    const coins = props.coins
    const search = props.search

    const filteredCoins = coins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) |
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className="table table-dark mt-4 table-hover" >
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={coin.id} index={index} />
                ))}
            </tbody>
        </table>
    )
}
