import React from 'react';

const Footer = (props) => {
    console.log(">>>",props)
    return(
        <div>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.year} {props.month}</h3>          
            </center>
        </div>
    )
}

export default Footer;



// {props.year} is data binding, it is to display the year on the screen, and it is from App.js inside <footer/>