import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealDescription from "./MealDescription";

const Meals = () => {
  return (
    <Fragment>
      <MealDescription />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
