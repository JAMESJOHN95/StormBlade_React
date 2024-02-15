import React from 'react'

function Footer() {
    return (
        <div>
            <div className="row mt-3 mb-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-3 d-flex flex-column lh-lg">
                    <h3>Traditional</h3>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Gatka</a>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Kalaripayattu</a>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Silambam</a>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Thang-ta</a>
                </div>

                <div className="col-lg-3 d-flex flex-column lh-lg">
                    <h3>Intrnational</h3>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Karate</a>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Taekwondo</a>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Judo</a>
                    <a style={{ textdecoration: 'none', color: 'red' }} >Kung Fu/Wushu</a>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>


    )
}

export default Footer