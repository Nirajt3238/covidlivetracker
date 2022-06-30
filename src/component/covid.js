import React, {useEffect, useState} from 'react'
import './covid.css';

const Covid = () => {
    const [data, setData]= useState([]);
    const getCovidData= async () => {
        try{
            const res=await fetch('https://data.covid19india.org/data.json');
            const actualData= await res.json();
            console.log(actualData.statewise[0]); 
            setData(actualData.statewise[0]);
        }
        catch(err){
            console.log(err);   
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
    <div className='container'>
        <section className='heading_title'>
            <h1 className='heading_title_text'>Covid-19 Coronavirus Tracker</h1>
        </section>
        <section className='body_data'>
            <div className="card card_style text-white bg-primary mb-3">
                <div className="card-body">
                    <h5 className="card-title">Total <span className='card_title_span'>Active</span></h5>
                    <p className="card-text">
                    {data.active}
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}
export default Covid;