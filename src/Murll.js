import React from 'react';

function Murll() {
    const containerStyle = {
        backgroundColor: '#ebebeb',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    }

    const infoStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
    }

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Hello, I'm Murll!</h1>
            <p style={infoStyle}>A passionate software engineering student at Moringa School.</p>
            <p style={infoStyle}>I'm a big fan of The Weeknd's music and a loyal supporter of Arsenal.</p>
            <p style={infoStyle}>Formula 1 enthusiast here, with a special place in my heart for the legendary Lewis Hamilton.</p>
        </div>
    )
}

export default Murll
