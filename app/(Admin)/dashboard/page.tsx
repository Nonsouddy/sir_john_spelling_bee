"use client"
import { useState } from 'react';
import { Search, Trash2, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

// Illustrate interfaces for type safety
interface User {
  id: number;
  fullName: string;
  email:string
  sex: string;
  category: string;
  dateOfBirth: string;
  class: string;
  phoneNumber: string;
  schoolName: string;
  schoolphoneNumber: string;
  schoolAddress: string;
  coachName: string;
  coachPhone: string;
}

const AdminDashboard = () => {
  // Properly typed state
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'example@gmail.com',
      phoneNumber: '+1234567890',
      sex: 'Male',
      category: 'Student',
      dateOfBirth: '1995-05-15',
      class: '12A',
      schoolName: 'Central High',
      schoolphoneNumber: '+1234567890',
      schoolAddress: '123 Education St',
      coachName: 'Mike Smith',
      coachPhone: '+1987654321'
    },
    {
      id: 2,
      fullName: 'John Doe',
      email: 'example@gmail.com',
      phoneNumber: '+1234567890',
      sex: 'Male',
      category: 'Student',
      dateOfBirth: '1995-05-15',
      class: '12A',
      schoolName: 'Central High',
      schoolphoneNumber: '+1234567890',
      schoolAddress: '123 Education St',
      coachName: 'Mike Smith',
      coachPhone: '+1987654321'
    },
    {
      id: 3,
      fullName: 'John Okechukwu Harry',
      email: 'example@gmail.com',
      phoneNumber: '+1234567890',
      sex: 'Male',
      category: 'Staff',
      dateOfBirth: '1995-05-15',
      class: '12A',
      schoolName: 'Central High',
      schoolphoneNumber: '+1234567890',
      schoolAddress: '123 Education St',
      coachName: 'Mike Smith',
      coachPhone: '+1987654321'
    },
  ]);

  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Search functionality
  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Handle user selection
  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  // Handle select all
  const toggleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map(user => user.id));
    }
  };

  // Delete selected users
  const deleteSelectedUsers = () => {
    setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  // Send email confirmation
  const sendEmailConfirmation = () => {
    // trigger an API call
    console.log('Sending email to selected users:', selectedUsers);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              Student Management Dashboard
            </h1>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={deleteSelectedUsers}
              disabled={selectedUsers.length === 0}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
            >
              <Trash2 className="mr-2" size={20} />
              Delete Selected
            </button>
            <button
              onClick={sendEmailConfirmation}
              disabled={selectedUsers.length === 0}
              className="flex items-center px-4 py-2 bg-emailButton text-white rounded-lg hover:bg-emailButtonHover disabled:opacity-50"
            >
             
              <Mail className="mr-2" size={20} />
              Send Email
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === currentUsers.length}
                      onChange={toggleSelectAll}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                 
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sex
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    School Information
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Coach Information
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-textGray">
                        {user.fullName}
                      </div>
                      <div className="text-sm text-gray-500">
                        Born: {user.dateOfBirth}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-textGray">{user.sex}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.email}
                      </div>
                      <div className="text-sm text-gray-500">
                         {user.phoneNumber}
                      </div>
                    </td>
                   
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {user.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-textGray">
                      {user.class}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-textGray">{user.schoolName}</div>
                      <div className="text-sm text-gray-500">{user.schoolphoneNumber}</div>
                      <div className="text-sm text-gray-500">{user.schoolAddress}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">{user.coachName}</div>
                      <div className="text-sm text-gray-500">{user.coachPhone}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <span className="text-sm text-gray-700">
                Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of{' '}
                {filteredUsers.length} results
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;