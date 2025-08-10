import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>Jammming</h2>
            <SearchBar />
        </header>
    );
}

export default Header;