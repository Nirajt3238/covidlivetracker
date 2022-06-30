import React from 'react'
import './covid.css';

function Grid(props) {
  return (
    <div>
        <div className='row'>
            <div className='col-lg-4'>
                <div className="card card_style text-white bg-primary mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Total <span className='card_title_span'>Active</span></h5>
                        <p className="card-text">{props.data}</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className="card card_style text-white bg-warning mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Data <span className='card_title_span'>Confirmed</span></h5>
                        <p className="card-text">{props.confirmed}</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className="card card_style text-white bg-danger mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Total <span className='card_title_span'>Deaths</span></h5>
                        <p className="card-text">{props.deaths}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-4'>
                <div className="card card_style text-white bg-info mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Last <span className='card_title_span'>Updated</span></h5>
                        <p className="card-text date_style">{props.lastupdated}</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className="card card_style text-white bg-dark mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Data <span className='card_title_span'>Migrated</span></h5>
                        <p className="card-text">{props.migratedother}</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className="card card_style text-white bg-success mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Total <span className='card_title_span'>Recovered</span></h5>
                        <p className="card-text">{props.recovered}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid