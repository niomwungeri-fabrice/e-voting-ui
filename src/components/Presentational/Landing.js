import React from 'react';
import 'antd/dist/antd.css';
import '../../styles/landing.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div className='headerContainer'>
                <div className='leftHeader'>
                    <h1>TORA</h1>
                </div>
                <div className='rightHeader'>
                    <Link to="/">Nominate</Link>
                    <Link to="/">Vote</Link>
                    <Button className='loginBtn'>login</Button>
                </div>
            </div>
            <hr/>
            <div className='mainContent'>
                <div className='leftContent'>
                    <h1>Tora will help you to vote</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                    </p>
                </div>
                <div className='rightContent'>
                    <p>
                        This time around we are voting for the employee of the month be sure to.
                    </p>
                    <Button className='nominateBtn'>Proceed to nomination</Button>
                </div>
            </div>
        </div>
    )
};

export default Landing;

