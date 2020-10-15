import React, {Component} from 'react';
import './footer.css';
import twitter from '../../img/twitter-icon-png'
import instagram from '../../img/instagram-icon-png'

class Footer extends Component{
    render(){
        return(
            <footer className="py-5">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <p>Redes sociais</p>
                            <div className="row img">
                                <img src={twitter}></img>
                                <img src={instagram}></img>
                            </div>
                        </div>

                        <div className="col">
                            <p>contato:<a href="tel:">(51) 1224-8744</a></p>
                        </div>

                        <div className="col">
                            <p className="endereço ml-5">
                                endereço: <br/>
                                avenida não lenbro, 2000 <br/>
                                moinho de sei la <br/>
                                canoas-rs <br/>
                                brasil <br/>
                            </p>
                        </div>
                    </div>
                    <p className="CopyRigth">CopyRigth@2020 - eu</p>
                </div>
            </footer>
        )
    }
}

export default Footer