import styles from "./ContactsList.module.css";
import ListItem from "./ListItem";
function ContactsList({ data, deleteHandler }) {
  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <ListItem key={item.id} data={item} deleteHandler={deleteHandler} />
        );
      })}
    </div>
  );
}

export default ContactsList;
