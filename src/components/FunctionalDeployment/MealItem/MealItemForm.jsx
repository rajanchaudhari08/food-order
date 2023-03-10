import styles from "./MealItemForm.module.css";
import Input from "../../UserInterface/Input";
import { useRef, useState } from "react";

const MealItemForm = (properties) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const refInputAmount = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = refInputAmount.current.value;
    const inputAmountNumber = +inputAmount;

    if (
      inputAmount.trim().length === 0 ||
      inputAmountNumber < 1 ||
      inputAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    properties.onAddToCart(inputAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={refInputAmount}
        label="Amount"
        input={{
          id: "amount_" + properties.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
