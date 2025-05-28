import ArrowDown from '@pages/PageOverview/icon/ArrowDown';
import React, { useState } from 'react';

const mockUsers = [
    { id: 7, name: 'George Miller', email: 'george@example.com' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com' },
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 6, name: 'Fiona Davis', email: 'fiona@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com' },
];

const Users = () => {
    const [users, setUsers] = useState(mockUsers);
    const [asc, setAsc] = useState(true);

    const handleSortByName = () => {
        const sorted = [...users].sort((a, b) =>
            asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        setUsers(sorted);
        setAsc(!asc);
    };

    return (
        <div className="flex flex-col justify-center  bg-gray-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Users</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-y-2">
                        <thead>
                            <tr className="text-sm text-gray-500">
                                <th
                                    className="py-3 px-4 cursor-pointer select-none hover:text-blue-600 transition-colors"
                                    onClick={handleSortByName}
                                >
                                    <div className='flex flex-row items-center gap-1'>
                                        Ім’я
                                        <span className={`transition-transform duration-300 ${asc ? 'rotate-180' : ''}`}>
                                            <ArrowDown />
                                        </span>
                                    </div>

                                </th>
                                <th className="py-3 px-4">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="bg-gray-100 hover:bg-blue-50 transition rounded-lg"
                                >
                                    <td className="py-2 px-4 rounded-l-lg font-medium text-gray-800">{user.name}</td>
                                    <td className="py-2 px-4 rounded-r-lg text-gray-600">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
