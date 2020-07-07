import React from 'react';
import './main.css';
import model1 from './model1.jpg';
import model2 from './model2.jpg';
import arrow from './arrow.png';
import barberscissors from './barberscissors.png';


function Main() {
  return (
    <main>
            <div className="wrap">
                <div className="left main-left">
                    <ul className="service-list">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                    <a href="" className="service-list">
                        <img src={arrow} alt=">>" height="35px" width="35px" className="arrow"/>
                        Подробнее
                    </a>
                    <img src={model1} alt="model1" className="model-left"/>
                </div>
                <div className="center main-center center-text">
                    <h2 className="center-header">Где мы находимся</h2>
                    <p>
                        Город Абакан<br/>
                        Улица Щетинкина 38<br/>                        
                        1 этаж<br/>
                    </p>
                    <div className="filler"></div>
                    <img src={barberscissors} alt="error" className="logo"/>
                    <h2 className="clock-text">Часы работы</h2>
                    <p>Без перерыва, без<br/> 
                       выходных
                    </p>
                </div>
                <div className="right main-right">
                    <img src={model2} alt="error" className="model-left model-right"/>
                    <div className="line"></div>
                    <div className="logo-right">
                        <img src={barberscissors} alt="error" className="logo"/>
                    </div>
                    <div className="center-text right-text">
                        <p>Салон красоты</p>
                        <h1 className="right-header">Vogue</h1>
                        <div className="filler filler-right"></div>
                    </div>
                </div>
            </div>    
    </main>
  );
}

export default Main;
