const getStyles = () => ({
    title: {
        fontSize: 50,
        padding: '15px',
        marginBottom: '50px',
        color: '#000',
        fontWeight: 'bold',
        textShadow: '4px 2px 4px rgba(255, 255, 255, 0.5)',
        letterSpacing: '2px',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
    }  
})

const Title = () => {
    const styles = getStyles();

    return <h1 style={styles.title}>People & Cars React Apollo GraphQL</h1>
}

export default Title;