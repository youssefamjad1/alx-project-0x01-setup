import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Users Page</h1>
        <div className="space-y-4">
          {users.map((user) => (
            <UserCard
              key={user.username}
              username={user.username}
              street={user.street}
              catchPhrase={user.catchPhrase}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();

  // Map the API user data to the UserProps interface
  const users: UserProps[] = usersData.map((user: any) => ({
    username: user.username,
    street: user.address.street,
    catchPhrase: user.company.catchPhrase,
  }));

  return {
    props: {
      users,
    },
  };
}

export default Users;
