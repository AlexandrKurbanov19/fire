
import { Link } from 'react-router-dom';
import './MainMenu.css';
// import fireRes from '../assets/fire-res.png'

export default function MainMenu() {
  return (
    <div className="menu-container">
      <h1>🔥 Пожарный Рыцарь</h1>
      <p>Список доступных мини игр:</p>
      {/* <img src={fireRes} /> */}
      <div className="games-grid">
        <Link to="/find-and-remove" className="game-card">
          <h2>Найди и убери</h2>
          <p>Ищи опасные предметы в комнате</p>
        </Link>
        <Link to="/right-choice" className="game-card">
          <h2>Правильный выбор</h2>
          <p>Выбери верные действия при пожаре</p>
        </Link>
      </div>
    </div>
  );
}