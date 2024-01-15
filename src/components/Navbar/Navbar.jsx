import "./Navbar.css";
import arrowDown from "../../assets/icon-arrow-down.svg";
import todoList from "../../assets/icon-todo.svg"
import calendar from "../../assets/icon-calendar.svg"
import reminders from "../../assets/icon-reminders.svg"
import planning from "../../assets/icon-planning.svg"
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState({
    i: 0,
    bool: false
  });

  const handleDropdown = (index) => {
    setOpen({
      i: index,
      bool: !open?.bool,
    })
  }


  return (
    <nav className="nav-desktop">
      <div className="nav-wrapper">
        <h1 className="title">snap</h1>

        <div className="links-wrapper">
          <div className="first-links-wrapper">
            <button className="link-dropdown-wrapper" style={{font: 'inherit'}}
            onClick={() => handleDropdown(1)}>
              <span>Features</span>
              <img src={arrowDown} 
              className={`${open.bool && open?.i === 1 ? 'rotate-arrow' : ''}`}
              style={{ marginLeft: "10px", width:'21px'}} />

              {open.bool && open?.i === 1 && 
                <div className="dropdown-wrapper1">
                  <a href="">
                    <img src={todoList} alt=""
                    style={{marginRight: '10px'}}/>
                    <span>Todo List</span>
                  </a>
                  <a href="">
                    <img src={calendar} alt=""
                    style={{marginRight: '10px'}}/>
                    <span>Calendar</span>
                  </a>
                  <a href="">
                    <img src={reminders} alt=""
                    style={{marginRight: '10px'}}/>
                    <span>Reminders</span>
                  </a>
                  <a href="">
                    <img src={planning} alt=""
                    style={{marginRight: '10px'}}/>
                    <span>Planning</span>
                  </a>
                </div>
              }
            </button>

            <button className="link-dropdown-wrapper" style={{font: 'inherit'}}
            onClick={() => handleDropdown(2)}>
              <span>Company</span>
              <img src={arrowDown}
              className={`${open.bool && open?.i === 2 ? 'rotate-arrow' : ''}`} 
              style={{ marginLeft: "10px", width:'21px'}} />
              {open.bool && open?.i === 2 &&
              <div className="dropdown-wrapper2">
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
              }
            </button>

            <a href="">Careers</a>
            <a href="">About</a>
          </div>

          <div className="second-links-wrapper">
            <a href="">Login</a>
            <a href="" className="register-btn">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
