import Account from "../../components/account";
import UserWelcom from "../../components/userWelcom";

import './style.scss';

export default function UserLogin() {

  const account = [
    {
      title: `Argent Bank Checking (x8349)`,
      amount: `$2,082.79`,
      description: `Available Balance`
    },
    {
      title: `Argent Bank Savings (x6712)`,
      amount: `$10,928.42`,
      description: `Available Balance`
    },
    {
      title: `Argent Bank Credit Card (x8349)`,
      amount: `$184.30`,
      description: `Current Balance`
    }
  ]


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
      ))
      }
    </main>
  );
}