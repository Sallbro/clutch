import React from 'react'
import Image from '../../assets/img/nftgirl.jpeg'

export default function my_card() {
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure><img src={Image} alt="Shoes" /></figure>
    </div>
    )
}
