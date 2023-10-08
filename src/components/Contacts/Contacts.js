import "../css/main.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">CONTACTS</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">EMAIL</h2>
                        <p><a href="mailto:webdev@protonmail.com">ftomi809@gmail.com</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">TELEGRAM</h2>
                        <p><a href="https://t.me/QKrNv6SKHO">QKrNv6SKHO</a></p>
                    </li>
                </ul>

            </div>
        </main>

    )
}
export  default  Contacts;