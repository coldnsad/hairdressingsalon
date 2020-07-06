<?php
    require_once 'header.php';

    echo <<<_MAIN_
        
        <main>
            <div class="wrap">
                <div class="left main-left">
                    <ul class="service-list">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                    <a href="" class="service-list">
                        <img src="/HairdressingSalon/img/arrow.png" alt=">>" height="35px" width="35px" class="arrow">
                        Подробнее
                    </a>
                    <img src="/HairdressingSalon/img/model1.jpg" alt="model1" class="model-left">
                </div>
                <div class="center main-center center-text">
                    <h2 class="center-header">Где мы находимся</h2>
                    <p>
                        Город Абакан<br>
                        Улица Щетинкина 38<br>                        
                        1 этаж<br>
                    </p>
                    <div class="filler"></div>
                    <img src="/HairdressingSalon/img/barberscissors.png" alt="error" class="logo">
                    <h2 class="clock-text">Часы работы</h2>
                    <p>Без перерыва, без<br> 
                       выходных
                    </p>
                </div>
                <div class="right main-right">
                    <img src="/HairdressingSalon/img/model2.jpg" alt="error" class="model-left model-right">
                    <div class="line"></div>
                    <div class="logo-right">
                        <img src="/HairdressingSalon/img/barberscissors.png" alt="error" class="logo">
                    </div>
                    <div class="center-text right-text">
                        <p>Салон красоты</p>
                        <h1 class="right-header">Vogue</h1>
                        <div class="filler filler-right"></div>
                    </div>
                </div>
            </div>    
        </main>
    _MAIN_;

    require_once 'footer.php';
?>