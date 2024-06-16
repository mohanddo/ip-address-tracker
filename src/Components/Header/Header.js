import Styles from "./Header.module.css";
function Header() {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.title}>IP Address Tracker</h1>
    </header>
  );
}

export default Header;
