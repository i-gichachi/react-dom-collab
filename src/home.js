function Home () {

    const containerStyle = {
        backgroundColor: '#007bff', 
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '70%',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }
    
      const headingStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#fff',
      }
    
      const textStyle = {
        fontSize: '18px',
        lineHeight: '1.5',
        color: '#fff',
        marginBottom: '15px',
      }
    
      return (
        <div style={containerStyle}>
          <h1 style={headingStyle}>Welcome to Group 1</h1>
          <p style={textStyle}>This group was formed during phase-1 of our journey.</p>
          <p style={textStyle}>Known as Group 1, it provided support and collaboration for each member in tackling coding challenges.</p>
          <p style={textStyle}>To learn more about each group member, click the button above in the navbar.</p>
        </div>
      )
    }

export default Home