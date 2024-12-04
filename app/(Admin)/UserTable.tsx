import { useState } from 'react';
import '../Style/Admin.css';
import Image from 'next/image';
import mail from '../../public/Svgs/mail.svg';
import trash from '../../public/Svgs/trash.svg';
import previous from '../../public/Svgs/previous.svg';
import next from '../../public/Svgs/next.svg';

interface User {
  id: number;
  fullName: string;
  dateOfBirth: string;
  category: string;
  schoolName: string;
  schoolAddress: string;
  class: string;
  coachName: string;
  coachPhoneNumber: string;
  phoneNumber: string;
  schoolLocation: string;
  email: string;
  onConfirmemail: number;
}

interface UserTableProps {
  users: User[];
  onDelete: (userIds: number[]) => void;
  onConfirmEmail: (userId: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete, onConfirmEmail }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectUser = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="userTable_main">
      <div className='table_section'>
        <div className="userTable_top">
          <button className="table_btn" onClick={() => onDelete(selectedUsers)}>
            Delete Selected
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="table_search"
          />

        </div>
        <table className="table_col">
          <thead>
            <tr>
              <th className="table_list"></th>
              <th className="table_list">Full Name</th>
              <th className="table_list">Date of Birth</th>
              <th className="table_list">Category</th>
              <th className="table_list">School Name</th>
              <th className="table_list">School Address</th>
              <th className="table_list">Class</th>
              <th className="table_list">Coach Name</th>
              <th className="table_list">Coach Phone Number</th>
              <th className="table_list">Phone Number</th>
              <th className="table_list">Email</th>
              <th className="table_list">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="">
                  <input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={() => handleSelectUser(user.id)} />
                </td>
                <td className="table_list">{user.fullName}</td>
                <td className="table_list">{user.dateOfBirth}</td>
                <td className="table_list">{user.category}</td>
                <td className="table_list">{user.schoolName}</td>
                <td className="table_list">{user.schoolAddress}</td>
                <td className="table_list">{user.class}</td>
                <td className="table_list">{user.coachName}</td>
                <td className="table_list">{user.coachPhoneNumber}</td>
                <td className="table_list">{user.phoneNumber}</td>
                <td className="table_list">{user.email}</td>
                <td className="table_list_a">
                  <button className="" onClick={() => onConfirmEmail(user.id)}>
                  <Image  src={mail} alt='' />
                  </button>
                  <button className="" onClick={() => onDelete([user.id])}>
                  <Image src={trash} alt='' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="rounded">
          <button className="">
          <Image src={previous} alt='' />
           
          </button>
          <button className="">
          <Image src={next} alt='' />
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
