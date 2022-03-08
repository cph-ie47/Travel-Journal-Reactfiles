import React from "react"

export default function Card(props) {
    return (
        <div className="container">
            <div className="row">

                <div className="col-lg-8 offset-lg-2">

                    <div className="row">
                        <div className="col-md-3">
                            <div className="card--image-hero">
                                <img src={props.item.imageUrl} className="card--image" />
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-12">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span className="card--location">{props.item.location}</span>
                                    {
                                            <a href={props.item.googleMapsUrl}
                                             className="card--map" target="_blank">View on Google Maps</a> 
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="card--title">{props.item.title}</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>

                                    <p>{props.item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}