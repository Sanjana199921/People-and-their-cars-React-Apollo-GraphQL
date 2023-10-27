import { useParams, Link } from "react-router-dom";
import { List, Card } from 'antd'
import { useQuery } from '@apollo/client'
import { GET_CARS } from '../queries'

const getStyles = () => ({
    card: {
        width: '455px',
        backgroundColor: 'rgb(96, 8, 158,0.3)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        color: '#333',
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        color:'00f'
    }
})

const ShowPage = () => {
    const { id } = useParams();

    const styles = getStyles();

    const { loading, error, data } = useQuery(GET_CARS, {
        variables: { personId: id }
    });

    if (loading) return 'Loading...';
    if (error) return `Error from Cars component! ${error.message}`; 

    return (
        <>
            <div style={styles.list}><li><Link to='/'><h1>GO BACK HOME</h1></Link></li></div>
            <List grid={{gutter: 20, column: 1}} style={styles.list}>
            {data.personCars.map(({id, make, model, personId, price, year}) => (
                <List.Item key={id}>
                    <Card title={make} style={styles.card}>
                        <p>Model: {model}</p>
                        <p>Year: {year}</p>
                        <p>Price: ${price}</p>
                    </Card>
                </List.Item>
            ))}
            </List> 
        </>
    )
}

export default ShowPage;