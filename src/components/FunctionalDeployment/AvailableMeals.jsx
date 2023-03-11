import styles from "./AvailableMeals.module.css";
import Card from "../UserInterface/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [mealItems, setMealItems] = useState([]);
  useEffect(() => {
    const fetchMealItems = async () => {
      const response = await fetch(
        "https://food-order-67003-default-rtdb.firebaseio.com/MealItems.json"
      );
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
    };
    fetchMealItems();
  }, []);

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
