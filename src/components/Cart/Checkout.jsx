import styles from "./Checkout.module.css";
import { useRef, useState } from "react";

const isValueNull = (value) => value.trim() === "";
const checkCharacterLength = (value) => value.trim().length === 5;

const Checkout = (properties) => {
  const [validateForm, setValidateForm] = useState({
    name: true,
    address: true,
    postalCode: true,
    country: true,
  });

  const refInputName = useRef();
  const refInputAddress = useRef();
  const refInputPostalCode = useRef();
  const refInputCountry = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    console.log("Form submitted");

    const inputName = refInputName.current.value;
    const inputAddress = refInputName.current.value;
    const inputPostalCode = refInputName.current.value;
    const inputCountry = refInputName.current.value;

    const isInputNameValid = !isValueNull(inputName);
    const isInputAddressValid = !isValueNull(inputAddress);
    const isInputPostalCodeValid = checkCharacterLength(inputPostalCode);
    const isInputCountryValid = !isValueNull(inputCountry);

    setValidateForm({
      name: isInputNameValid,
      address: isInputAddressValid,
      postalCode: isInputPostalCodeValid,
      country: isInputCountryValid,
    });

    const isFormValid =
      isInputNameValid &&
      isInputAddressValid &&
      isInputPostalCodeValid &&
      isInputCountryValid;
    if (!isFormValid) {
      return;
    }
    properties.onConfirm({
      name: inputName,
      address: inputAddress,
      country: inputCountry,
      postalCode: inputPostalCode,
    });
  };

  const styleInputName = `${styles.control} ${
    validateForm.name ? " " : styles.invalid
  }`;
  const styleInputAddress = `${styles.control} ${
    validateForm.address ? " " : styles.invalid
  }`;
  const styleInputPostalCode = `${styles.control} ${
    validateForm.postalCode ? " " : styles.invalid
  }`;
  const styleInputCountry = `${styles.control} ${
    validateForm.country ? " " : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styleInputName}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={refInputName} />
        {!validateForm.name && <p>Please enter valid Name.</p>}
      </div>
      <div className={styleInputAddress}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={refInputAddress} />
        {!validateForm.address && <p>Please enter valid Address.</p>}
      </div>
      <div className={styleInputPostalCode}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={refInputPostalCode} />
        {!validateForm.postalCode && <p>Please enter valid Postal Code.</p>}
      </div>
      <div className={styleInputCountry}>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" ref={refInputCountry} />
        {!validateForm.country && <p>Please enter valid Country.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={properties.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
