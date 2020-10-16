import React, {Component} from 'react';
import Capitao from "../../img/CapitãoPng.png"
import HomemFerro from "../../img/HomemFerroPng.png"
import Thor from "../../img/ThorPng.png"
import Hulk from "../../img/HulkPng.png"
import "./home.css";

class Home extends Component{
    render(){
        return(
            <div className="home">
                <p className="titulo">AVENGERS</p>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img className="foto2" src={Capitao}></img>
                        </div>
                        <div className="col-3">
                            <img className="foto2" src={HomemFerro}></img>
                        </div>
                        <div className="col-3">
                            <img className="foto" src={Thor}></img>
                        </div>
                        <div className="col-3">
                            <img className="foto" src={Hulk}></img>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-5 mr-5 text-center borda">
                            info 1

                        </div>
                        <div className="col-5 ml-5 text-center borda">
                            info 2
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home