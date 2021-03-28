import { React, useState, useEffect } from "react";
import axios from 'axios'
import Recording from './Recording'

export default function Home() {

    const [beers, setBeers] = useState([]);


    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((response)=> {
            setBeers(response.data)
        })
        .catch((err)=> console.log("Error setting state"))
      }, []);

    return (
        <div>
            <h1 className="header"><span className="title">List of Beers 🍺 .</span></h1>
            <div className="main">
            <div className="content">

            {
                beers.map((singleBeer, index)=> {
                    return(
                        <ul key={index}>
                            <li ><span className="subtitle">{singleBeer.name}</span></li>
                            <p >{singleBeer.tagline}</p>
                            <p >{singleBeer.description}</p>
                            <Recording/>
                        </ul>
                    )
                })
            }
            </div>
            </div>
        </div>
    )
}
