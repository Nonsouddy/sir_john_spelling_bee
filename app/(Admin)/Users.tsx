// pages/admin/users.tsx
import React, { useState, useEffect } from 'react';
// import Layout from '../../components/Layout/Layout';
import { User } from '../Type/user';
import Image from 'next/image';
import trash from '../../public/Svgs/trash.svg';
import mail from '../../public/Svgs/mail.svg';
import search from '../../public/Svgs/search.svg';
import styles from '../style/Dashboard.module.css';

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    // Fetch users (replace with actual API call)
    useEffect(() => {
        const fetchUsers = async () => {
            // Simulated user data
            const mockUsers: User[] = [
                {
                    id: '1',
                    fullName: 'Harry patrick okechukwu',
                    email: '@example.com',
                    sex: 'Male',
                    gender: 'Male',
                    category: 'Athlete',
                    dateOfBirth: '1990-01-01',
                    class: 'Advanced',
                    phoneNumber: '+1234567894',
                    schoolName: 'Sports Academy',
                    schoolAddress: '123 Sports St, City, Country',
                    coachName: 'Coach Smith',
                    coachPhone: '+0987654321'
                },
                {
                    id: '2',
                    fullName: 'Johnson madukachi Benson',
                    email: '@example.com',
                    sex: 'Male',
                    gender: 'Male',
                    category: 'Athlete',
                    dateOfBirth: '1990-01-01',
                    class: 'Advanced',
                    phoneNumber: '+1234567890',
                    schoolName: 'Sports Academy',
                    schoolAddress: '123 Sports St, City, Country',
                    coachName: 'Coach Smith',
                    coachPhone: '+0987654321'
                },
                {
                    id: '3',
                    fullName: 'John Doe',
                    email: '@example.com',
                    sex: 'Male',
                    gender: 'Male',
                    category: 'Athlete',
                    dateOfBirth: '1990-01-01',
                    class: 'Advanced',
                    phoneNumber: '+1234567890',
                    schoolName: 'Sports Academy',
                    schoolAddress: '123 Sports St, City, Country',
                    coachName: 'Coach Smith',
                    coachPhone: '+0987654321'
                },
                // Add more mock users...
            ];
            setUsers(mockUsers);
        };

        fetchUsers();
    }, []);

    // Filter users
    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phoneNumber.includes(searchTerm)

    );

    // Pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Handle user selection
    const handleUserSelect = (userId: string) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    // Select all users
    const handleSelectAll = () => {
        if (selectedUsers.length === currentUsers.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(currentUsers.map(user => user.id));
        }
    };

    // Delete selected users
    const handleDeleteSelected = async () => {
        if (window.confirm('All selected user(s) will be deleted,proceed?')) {
            // Implement delete logic
            setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
            setSelectedUsers([]);

            // Send email confirmations (mock implementation)
            selectedUsers.forEach(userId => {
                const user = users.find(u => u.id === userId);
                if (user) {
                    // Simulate email sending
                    console.log(`Sending deletion confirmation email to ${user.fullName}`);
                }
            });
        }
    };

    return (
        <div>
            <div className={styles.usersContainer}>

                <h1></h1>

                {/* Search and Actions */}
                <div className={styles.userActions}>
                    <div className={styles.searchIcon}>
                    <Image src={search} alt=""/>
                    <input
                    

                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                    </div>
                    {selectedUsers.length > 0 && (
                        <button
                            onClick={handleDeleteSelected}
                            className={styles.deleteSelectedBtn}
                        >
                            Delete({selectedUsers.length})
                        </button>
                    )}
                </div>

                {/* Users Table */}
                <div className={styles.tableSection}>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.length === currentUsers.length}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>DateOfBirth</th>
                            <th>Class</th>
                            <th>Category</th>
                            <th>School Name</th>
                            <th>Location</th>
                            <th>Phone Number</th>
                            <th>CoachName</th>
                            <th>CoachPhone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={() => handleUserSelect(user.id)}
                                    />
                                </td>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.gender}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.class}</td>
                                <td>{user.category}</td>
                                <td>{user.schoolName}</td>
                                <td>{user.schoolAddress}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.coachName}</td>
                                <td>{user.coachPhone}</td>
                                <td>
                                    <button className={styles.viewDetailsBtn}>
                                        <Image src={mail} alt=""/>
                                    </button>
                                    <button
                                        className={styles.deleteBtn}
                                        onClick={() => {
                                            if (window.confirm(`Delete user ${user.fullName}?`)) {
                                                setUsers(prev => prev.filter(u => u.id !== user.id));
                                            }
                                        }}
                                    >
                                        <Image src={trash} alt=""/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    {Array.from({
                        length: Math.ceil(filteredUsers.length / usersPerPage)
                    }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={currentPage === i + 1 ? styles.activePage : ''}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default UsersPage;