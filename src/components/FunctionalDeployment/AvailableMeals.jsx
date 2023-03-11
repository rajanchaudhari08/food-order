import styles from "./AvailableMeals.module.css";
import Card from "../UserInterface/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchMealItems = async () => {
      const response = await fetch(
        "https://food-order-67003-default-rtdb.firebaseio.com/"
      );
      if (!response.ok) {
        throw new Error("We are not able to fetch data for server.");
      }
      const responseData = await response.json();
      const receivedMealItems = [];
      for (const key in responseData) {
        receivedMealItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealItems(receivedMealItems);
      setIsLoading(false);
    };

    fetchMealItems().catch((error) => {
      setIsLoading(false);
      setFetchError("We are not able to fetch data for server.");
      // setFetchError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (fetchError) {
    return (
      <section className={styles.fetchError}>
        <p>{fetchError}</p>
      </section>
    );
  }

  const mealsList = mealItems.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
