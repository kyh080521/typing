import style from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className = {style.Header}>
            <span className = {style.title}>Typing Test</span>
            <span className = {style.description}>How many words per minute can you type?</span>
        </div>
    );
}

export default Header;