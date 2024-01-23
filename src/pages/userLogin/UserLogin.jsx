import Account from "../../components/account/Account";
import UserWelcom from "../../components/userWelcom/UserWelcom";
import { account } from "../../constants/constants";

import "./UserLogin.scss";

export default function UserLogin() {
    return (
        <main className="bg-dark">
            <UserWelcom />
            <h2 className="sr-only">Accounts</h2>
            {account.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
}
