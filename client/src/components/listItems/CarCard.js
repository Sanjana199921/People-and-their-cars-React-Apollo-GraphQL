import { useState } from 'react'
import { Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import RemoveCar from '../buttons/RemoveCar'
import UpdateCar from '../forms/UpdateCar'

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
    }
})

const CarCard = props => {
    const { id , make, model, year, price, personId , people } = props;
    const styles = getStyles();

    const [editMode, setEditMode] = useState(false);

    const handleButtonClick = () => setEditMode(!editMode);

    return (
        <>
            {editMode ?
                <UpdateCar 
                    id={id}
                    make={make}
                    model={model}
                    year={year}
                    price={price}
                    personId={personId}
                    people={people}
                    onButtonClick={handleButtonClick} />
                    :
            <Card style={styles.card}
                actions={[
                    <EditOutlined key='edit' onClick={handleButtonClick} />,
                    <RemoveCar id={id} personId={personId} />
                ]}>
                {make} {model}, {year}, ${price}
            </Card>
    }
        </>
    )
}

export default CarCard;