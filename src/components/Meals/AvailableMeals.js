import React, { useEffect, useState } from "react";
import {
  StyledSection,
  StyledLoadingSection,
  StyledErrorSection,
} from "./AvailableMeals.styled";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-meal-http-4229c-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      const loadedMeals = [];
      for (let key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key={meal.id}
      id={meal.id}
    />
  ));

  if (isLoading) {
    return (
      <StyledLoadingSection>
        <p>Loading...</p>
      </StyledLoadingSection>
    );
  }

  if (httpError) {
    return (
      <StyledErrorSection>
        <p>{httpError}</p>
      </StyledErrorSection>
    );
  }

  return (
    <StyledSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </StyledSection>
  );
};

export default AvailableMeals;
