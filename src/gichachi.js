function Gichachi() {
    const containerStyle = {
        backgroundColor: '#4CAF50', 
        border: '2px solid black', 
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
        color: 'white', 
      }
      
      const infoStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
        color: 'white', 
      }
      
      return (
        <div style={containerStyle}>
          <h1 style={headingStyle}>Hello, I'm Gichachi!</h1>
          <p style={infoStyle}>I am currently a software engineering student at Moringa School.</p>
          <p style={infoStyle}>I'm a big fan of Young Thug's music and a loyal supporter of Manchester United, the biggest football club.</p>
          <p style={infoStyle}>I love watching Formula 1 and am a fan of the G.O.A.T of the sport, Lewis Hamilton, also known as the Black Messiah.</p>
          <p style={infoStyle}>I love watching horror and thriller movies and series.</p>
        </div>
      )
      
}

export default Gichachi