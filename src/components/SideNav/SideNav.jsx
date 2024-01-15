import "./SideNav.css";
import iconMenu from "../../assets/icon-menu.svg";
import iconCloseMenu from "../../assets/icon-close-menu.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import todoList from "../../assets/icon-todo.svg";
import calendar from "../../assets/icon-calendar.svg";
import reminders from "../../assets/icon-reminders.svg";
import planning from "../../assets/icon-planning.svg";
import { useState } from "react";

export default function SideNav() {
  const [open, setOpen] = useState({
    i: 0,
    bool: false,
  });

  const [sideNavOpen, setSideNavOpen] = useState(false)

  const handleDropdown = (index) => {
    setOpen({
      i: index,
      bool: !open?.bool,
    });
  };

  return (
    <nav className="nav-mobile">
      <div className="nav-mobile-wrapper">
        <h1 className="title">snap</h1>

        <button onClick={() => setSideNavOpen(true)}>
          <img src={iconMenu} alt="hamburger-menu" style={{ width: "38px" }} />
        </button>
      </div>

      <div className={`${sideNavOpen ? 'side-navOpen' : 'side-navClose'} side-nav`}>
        <button className="close-btn" onClick={() => setSideNavOpen(false)}>
          <img src={iconCloseMenu} alt="close-menu" style={{ width: "31px" }} />
        </button>

        <div className="side-nav-links-wrapper">
            <button onClick={() => handleDropdown(1)} className="dropdown-btn">
              <span>Features</span>
              <img src={arrowDown} 
              className={`${open.bool && open?.i === 1 ? 'rotate-arrow' : ''}`}
              style={{ marginLeft: "10px", width:'21px', transition: 'all 0.4s ease'}} />
            </button>
          
            {open.bool && open?.i === 1 && (
              <div className="side-nav-dropdown-wrapper">
                <a href="">
                  <img src={todoList} alt="" style={{ marginRight: "10px", width: "19px" }} />
                  <span>Todo List</span>
                </a>
                <a href="">
                  <img src={calendar} alt="" style={{ marginRight: "10px", width: "19px" }} />
                  <span>Calendar</span>
                </a>
                <a href="">
                  <img src={reminders} alt="" style={{ marginRight: "10px", width: "19px" }} />
                  <span>Reminders</span>
                </a>
                <a href="">
                  <img src={planning} alt="" style={{ marginRight: "10px", width: "19px" }} />
                  <span>Planning</span>
                </a>
              </div>
            )}
        
            <button onClick={() => handleDropdown(2)} className="dropdown-btn">
              <span>Company</span>
              <img src={arrowDown} 
              className={`${open.bool && open?.i === 2 ? 'rotate-arrow' : ''}`}
              style={{ marginLeft: "10px", width:'21px', transition: 'all 0.4s ease'}} />
            </button>
           
            {open.bool && open?.i === 2 && (
              <div className="side-nav-dropdown-wrapper">
                <a href="">
                  <span>History</span>
                </a>
                <a href="">
                  <span>Our Team</span>
                </a>
                <a href="">
                  <span>Blog</span>
                </a>
              </div>
            )}

            <button className="dropdown-btn">
              <span>Careers</span>
            </button>

            <button className="dropdown-btn">
              <span>About</span>
            </button>

            <button className="dropdown-btn" 
            style={{width: '100%', textAlign: 'center', marginTop: '2rem'}}>
              <span>Login</span>
            </button>

            <button className="dropdown-btn register-btn" 
            style={{width: '100%', textAlign: 'center'}}>
              <span>Register</span>
            </button>
        </div>

      </div>

      <div className={`${sideNavOpen ? 'bg-overlayOpen' : 'bg-overlayClose'} bg-overlay`}></div>
    </nav>
  );
}
