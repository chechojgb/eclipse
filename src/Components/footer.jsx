import React from 'react'
import '../style-sheet/Footer.css'

export function Footer (props){
    return(
            <footer className='footer'>
                <div className='container-footer'>
                <div className="footer-row">
                    {props.children}    
                </div>

                <div className='footer_bottom'>
                    <div>{props.rights}</div>
                        <div>
                            <a  href={`../../${props.direction}`}>
                                    {props.director}
                                </a>
                            </div>
                </div>
                </div>

            </footer>      
        

        
    );
}

export function Footer_top (props){
        if (props.icon) {
            
            return (
                <div className="footer-links">
                <h4>{props.title}</h4>
                <div className="social-link">
                    {props.icon.map((icon, index)=>(
                        <a href="" key={index}><i className={icon}></i></a>
                    ))}
                </div>
                </div>
                
            );
        } else if(props.company){
            return(
            <div className="footer-links">
                <figure className='centrar'>
                    <a href="#">
                        <img className="icono"src={require(`../images/${props.company}`)} alt="" />
                    </a>
                </figure>
            </div>
            );
        }else{
            
            return(
                <div className="footer-links">
                        <h4>{props.title}</h4>
                        <ul>
                            {props.li.map((list, index)=>(
                                <li key={index}><a href="">{list}</a></li>
                                ))}
    
                        </ul>
                </div>
        )
        }
    

    
    
}