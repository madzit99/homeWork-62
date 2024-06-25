import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-dark bg-danger">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          UFC
        </NavLink>
        <ul className="navbar-nav ms-auto d-flex flex-row gap-3 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/fighters" className="nav-link">
              Бойцы
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rating" className="nav-link">
              Рейтинг
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/fight" className="nav-link">
              Предстоящий бой
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;
