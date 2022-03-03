import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header__upper-header">
                <ul>
                    <li>Contact Us</li>
                    <li>Order brochure</li>
                    <li>Call us: +43 6767073230</li>
                    <li>Open 8:30am - 7pm CET</li>
                </ul>
            </div>
            <div className="header__lower-header">
                <h1>Climb & Travel</h1>
                <nav>
                    <ul className="header__menu">
                        <li>Destinations</li>
                        <li>Experiences</li>
                        <li>About</li>
                        <li>Offers</li>
                        <li>Travel Safety</li>
                    </ul>
                    <div className="header__wish-search">
                        <ul>
                            <li>
                                <AiOutlineHeart className="header__wish-heart" />
                                Wishlist
                            </li>
                            <li>
                                <AiOutlineSearch />
                                Trip Search
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
