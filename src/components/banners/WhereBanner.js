import React from 'react';
import { getPlace, getPlaceInfo, getOpeningTimes } from "../../model/place";
import {MapContainer} from "../tools/Maps/MapContainer";

export default function WhereBanner() {
    const place = getPlace().place;
    const placeInfo = getPlaceInfo().placeInfo;
    const openingTimes = getOpeningTimes().openingTimes;

    const openingTimesItems = openingTimes.map((time, i) =>
        <div key={i} className="col-6 col-md-3 col-lg-12">
            <div className="row justify-content-center my-3">
                <div className="col-4 col-lg-3">
                <span className="day-wrapper">
                    {time.short}
                </span>
                </div>
                <div className="col-8 col-lg-9">
                <span className="day-opening-times">
                    {time.times.length === 0 ? <span className="day-close">Chiuso</span> : time.times.map((our, j) => <p key={j} className="one-our">{ our }</p> )}
                </span>
                </div>

            </div>
        </div>
    )

    return (
        <section className="section where-section">
            <div id="where" className="section-wrapper">
                <div className="section-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-9">
                              <MapContainer
                                place={place}
                              />
                            </div>
                            <div className="col-12 col-md-12 col-lg-3">
                                <div className="content text-white">
                                    <h2 className="section-header text-primary text-center text-lg-left">Dove siamo</h2>
                                    <div className="where-info text-center text-lg-left">
                                        <p className="address">
                                            {placeInfo.address}
                                        </p>
                                        <div className="contacts">
                                            <p className="telephone">
                                                <i className="fas fa-phone text-secondary mr-3" />
                                                <span>{placeInfo.telephone}</span>
                                            </p>
                                            <p className="email">
                                                <i className="fas fa-envelope text-secondary mr-3" />
                                                <span><a href={`mailto:${placeInfo.email}`}>{placeInfo.email}</a></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="opening-time">
                                        <h3 className="sub-section-header text-primary text-center text-lg-left">Orari</h3>
                                        <div className="row justify-content-lg-start justify-content-start justify-content-md-center">
                                            {openingTimesItems}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
