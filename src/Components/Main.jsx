import React from "react";
import { Link } from "react-router-dom";
import '../style-sheet/Main.css'

export function Main(props) {
        return(
            <div className="main">
                <main className="main-page">
                    <div className="title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="central">
                        <div className="separar" >
                            {props.children}
                        </div>
                        <div className="news">
                            {props.News}
                        </div>
                    </div>
                </main>
            </div>
    
    
        );
}

export function News(props){
    
    if (props.src) {
        
        const iframeStyles = {
            border: 'none',
            overflow: 'hidden',
            scrolling: 'no',
            width: '100%',
            height: '533px', 
            allowfullscreen: 'true',
            allow: 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        };

        return (
            <div className="section">
                <h2 className="title-container">{props.title}</h2>
                
                <div className="social">
                    <iframe className="red-social"
                        src={props.src} 
                        style={iframeStyles} 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>
                </div>
            </div>
        );
    } else {
        
        return (
            <div className="section">
                <h2 className="title-container">{props.title}</h2>
                <div className="news-section">
                {props.children}

                </div>
            </div>
        );
    }
}


export function Section(props) {
    if (props.img) {
        return(
        <div >
              <br />
              <p>{props.description}</p>
              <br />
              <img className="fondo" src={require(`../images/${props.img}`)} alt="" />
        </div>
        );
    }else if(props.history){
        return(

            <div className='history'>
              <br />
              <p>{props.history}
              <br />
              ㅤ
              </p>
              <div className="bottom">
              <Link to='../historia'><button className="boton-bonito">Conoce más</button></Link>
              </div>
              
            </div>
        )
    }else{
    return(
        <div className="container">
            <div className="section"><h2 className="title-container">{props.title}</h2>
                {props.children}
            </div>
        </div>
    ); 
    }
}

