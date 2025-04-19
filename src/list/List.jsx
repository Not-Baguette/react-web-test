import { useState } from 'react';
import styles from './list.module.css';

function List(props) {
    const [isOpen, setIsOpen] = useState(false); // State to track if the container is open

    const toggleOpen = () => {
        setIsOpen(!isOpen); // Toggle the open state
    };

    const listItem = props.items.map((item, index) => (
        <li key={index} className={styles.listItem}>{item}</li>
    ));

    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ''}`} onClick={toggleOpen}>
            <div className={styles.content}>
                <h1>{props.title}</h1>
                {isOpen && ( // Only show the list if the container is open
                    <ul className={styles.list}>{listItem}</ul>
                )}
            </div>
        </div>
    );
}

export default List