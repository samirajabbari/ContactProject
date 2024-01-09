import styles from "./ContactsList.module.css";

function ContactsList({ data }) {
  return (
    <div className={styles.container}>
      <ul key={data.id}>
        <p>
          <span>{data.name}</span> <span>{data.lastName}</span>
        </p>
        <p>
          <span className={styles.icon}>📨</span>
          <span>{data.email}</span>
        </p>
        <p>
          <span className={styles.icon}>☎</span>
          <span>{data.phonNumber}</span>
        </p>
        <p>
          <span className={styles.icon}>🗑</span>
        </p>
      </ul>
    </div>
  );
}

export default ContactsList;
