import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default function Menu() {

    //  https://www.themealdb.com/api/json/v1/1/search.php?s=chicken

    const [mealData, setMealData] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((data) => setMealData(data.meals))

    }, []);

    return (
        
        <div className='container'>
     

            {mealData.map((meal) => (

                <div key={meal.idMeal}>

                              
                    <div >
                    <Card className='box' >
                        <Card.Img className='poster' variant="top" src={meal.strMealThumb} />
                        <Card.Body>
                            <Card.Title className='title'  >{meal.strMeal} </Card.Title>
                        </Card.Body>                        
                        <a href={meal.strYoutube} target= "_blank" rel="noreferrer" > <Button variant="primary">Watch video</Button></a>                     
                        
                    </Card>                        
                        </div>

                    
                    
                </div>
            ))}

        </div>
    )
}
