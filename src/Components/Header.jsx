import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../style-sheet/Header.css'




export function Title_header  (props){
  return(
    <div className='container-header'>

    <header className='header'>
        <div className='header-content'>
          <img src={require(`../images/${props.image}`)} alt="" />
          <h1>Eclipse</h1>
        </div>


        <div className='header-image'>
          <h1>{props.title}</h1>
        </div>



      <nav className='navegation'>
      {props.children}
      </nav>

    </header>

    </div>
  );
}

export function Header(props) {
  const [list, setList] = useState(false);

  return (
    <ul className="header-ul">
      <li className="header-li">
        <div
          className="header-top"
          onMouseEnter={() => setList(true)}
          onMouseLeave={() => setList(false)}
        >
          <p href="" className='click'>
            <span>{props.principal_text}</span>
          </p>
        </div>
        {list && (
          <div
            className="header-bottom"
            onMouseEnter={() => setList(true)}
            onMouseLeave={() => setList(false)}
          >
            <div className='icon'>
            <i className="fa-solid fa-caret-up" ></i>
            </div>
            <ul className="subnav">
              {props.subnavs.map((subnav, index) => (
                <Link  key={index} to={`../../${props.links[index]}`}>
                  <li>
                    <span>{subnav}</span>
                </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
}

