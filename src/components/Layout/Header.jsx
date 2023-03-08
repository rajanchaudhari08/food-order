import { Fragment } from "react";
import styles from "./Header.module.css";
import coverImage from "../../assets/cover-image.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (properties) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food Delivery</h1>
        <HeaderCartButton />
      </header>
      <section className={styles["cover-image"]}>
        <img src={coverImage} alt="A table full of delicious food." />
      </section>
    </Fragment>
  );
};

export default Header;
