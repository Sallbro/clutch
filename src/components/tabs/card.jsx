import React from 'react'
import Image from '../../assets/img/nftgirl.jpeg'
import Model from './Bid_model'

export default function card() {
    return (
        <div className="card w-11/12 bg-base-100 shadow-2xl">
            <figure className="p-10">
                <img src={Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <Model/>
                    {/* <button className="btn btn-primary">post</button> */}
                </div>
            </div>
        </div>
    )
}
