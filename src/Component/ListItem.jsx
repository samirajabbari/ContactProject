import styles from "./ListItem.module.css";
function ListItem({
  data: { id, name, lastName, email, phonNumber },
  deleteHandler,
}) {
  return (
    <div>
      <li key={id} className={styles.container}>
        <p>
          {name} {lastName}
        </p>
        <p>
          <span className={styles.icon}>📨</span>
          {email}
        </p>
        <p>
          <span className={styles.icon}>☎</span>
          {phonNumber}
        </p>
        <p>
          <button className={styles.delete} onClick={() => deleteHandler(id)}>
            🗑
          </button>
        </p>
      </li>
    </div>
  );
}

export default ListItem;
