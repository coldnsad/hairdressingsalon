import React from 'react';
import './header.css';

function Header() {
  return (
        <header>
        <nav>
            <div className="wrap">
                <div className="left">Наши услуги</div>
                <div className="center">
                    <a href="http://localhost/HairdressingSalon/shedule.php">Расписание</a>
                </div>
                <div className="right">
                    <button className="enter">Войти</button>
                    <button className="register">Регистрация</button>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;