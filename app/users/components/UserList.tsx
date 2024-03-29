"use client";
import { User } from "@prisma/client";
import React from "react";
import UserBox from "./UserBox";

interface IUserListProps {
  item: User[];
}

const UserList: React.FC<IUserListProps> = ({ item }) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
      <div className="px-5">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">People</div>
        </div>
        {item.map((user) => (
          <UserBox key={user.id} user={user} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
