import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MealComponent = () => {
  const [mealsData, setMealsData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
      const data = await response.json();
      setMealsData(data.meals || []);
    };

    fetchData();
  }, [searchText]);

    const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchText(value);

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const data = await response.json();
    const mealNames = data.meals ? data.meals.map((meal) => meal.strMeal) : [];
    setSuggestions(mealNames);

  };

  const handleSuggestionSelect = (selectedSuggestion) => {
    setSearchText(selectedSuggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <div>

        {suggestions.length > 0 && (
          <select onChange={(e) => handleSuggestionSelect(e.target.value)}>
            {suggestions.map((suggestion, index) => (
              <option key={index} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </select>


        )}
        <input
          type="text"
          placeholder="Search for food..."
          value={searchText}
          onChange={handleSearchChange}
        />

      </div>
      <div className='container'>
        {mealsData.map((meal) => (
          <div key={meal.idMeal}>
            <Card className='box' >
              <Card.Img className='poster' variant="top" src={meal.strMealThumb} />
              <Card.Body>
                <Card.Title className='title'  >{meal.strMeal} </Card.Title>
              </Card.Body>
              <a href={meal.strYoutube} target="_blank" rel="noreferrer" > <Button variant="primary">Watch video</Button></a>
            </Card>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MealComponent;
