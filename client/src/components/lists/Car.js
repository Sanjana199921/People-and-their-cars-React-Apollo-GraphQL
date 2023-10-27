
import { List } from 'antd'
import { useQuery } from '@apollo/client'
import { GET_CARS } from '../../queries'
import CarCard from '../listItems/CarCard'

const getStyles = () => ({
    card: {
        width: '500px',
        backgroundColor: 'rgb(96, 8, 158,0.3)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        color: 'rgb(96, 8, 158)',
        fontweight: 700,
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
    }
})

const Car = props => {
    const { id , people } = props;
    const styles = getStyles();

    const { loading, error, data } = useQuery(GET_CARS, {
        variables: { personId: id }
    });

    if (loading) return 'Loading...';
    if (error) return `Error from Cars component! ${error.message}`; 

    console.log("Person cars data: ", data.personCars);

    return (
        <>
            <List grid={{gutter: 20, column: 1}} style={styles.list}>
            {data.personCars.map(({id, make, model, personId, price, year}) => (
                <List.Item key={id}>
                    <CarCard id={id} make={make} model={model} year={year} price={price} personId={personId} people={people} />
                </List.Item>
            ))}
            </List> 
        </>
    )
}

export default Car;