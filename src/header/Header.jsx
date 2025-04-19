import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <h1>Baguette</h1>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;