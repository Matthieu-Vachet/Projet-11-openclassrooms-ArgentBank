import Button from "../button/Button";
import "./Account.scss";

export default function Account(children) {
        return (
                <section className="account">
                        <div className="account-content-wrapper">
                                <h3 className="account-title">{children.title}</h3>
                                <p className="account-amount">{children.amount}</p>
                                <p className="account-amount-description">{children.description}</p>
                        </div>
                        <Button />
                </section>
        );
}
