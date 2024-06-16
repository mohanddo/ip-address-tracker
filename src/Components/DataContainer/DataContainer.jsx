import styles from "./DataContainer.module.css";

function DataContainer({ ipAddress }) {
  return (
    <ul className={styles.DataContainer}>
      <li>
        <p className={styles.information_type}>IP Address</p>
        <p className={styles.information}>{ipAddress.ip}</p>
      </li>
      <li>
        <p className={styles.information_type}>LOCATION</p>
        <p className={styles.information}>
          {ipAddress.location &&
            `${ipAddress.location.country}, ${ipAddress.location.region}`}
        </p>
      </li>
      <li>
        <p className={styles.information_type}>TIMEZONE</p>
        <p className={styles.information}>
          {ipAddress.location && "UTC " + ipAddress.location.timezone}
        </p>
      </li>
      <li>
        <p className={styles.information_type}>ISP</p>
        <p className={styles.information}>{ipAddress.isp}</p>
      </li>
    </ul>
  );
}

export default DataContainer;
