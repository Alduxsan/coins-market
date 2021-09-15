import React from 'react'

const tendenceValue = (value) =>{
    return value > 0 ? "text-success" : "text-danger"
}

export function CoinRow({coin, index}) {
    
    console.log(coin,index)
    return (
        <tr>
            <td>{index}</td>    
            <td>
                <img className="coinIcon me-4 img-fluid" src={coin.image} alt={coin.name} />
                <span>{coin.name}</span>
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td className={tendenceValue(coin.price_change_percentage_24h)}>% {coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td> 
        </tr>
    )
}
 