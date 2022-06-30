import React, {useEffect, useState} from 'react'
import './covid.css';
import Grid from './grid';

const Covid = (props) => {
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
            <Grid data={data.active} confirmed={data.confirmed} deaths={data.deaths} 
            lastupdated={data.lastupdatedtime} migratedother={data.migratedother} 
            recovered={data.recovered} />
        </section>
    </div>
  )
}
export default Covid;