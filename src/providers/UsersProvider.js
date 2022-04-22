import React, { useState } from "react"
import { users as usersData } from "data/users"

export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => { },
    deleteUser: () => { },
})

export const UserProvider = (children) => {
    const [users, setUsers] = useState(usersData);
    const handleAddUser = (formValues) => {
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };
        setUsers([newUser, ...users]);
    };

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };

    return (
        <UsersContext.Provider value={{
            users,
            handleAddUser,
            deleteUser,
        }}>
            {children}
        </UsersContext.Provider>
    )
}