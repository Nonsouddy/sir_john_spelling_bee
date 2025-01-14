"use client"
import React, { useState } from 'react';
import {
  Users,
  Package,
  UserCog,
  Image,
  Calendar,
  LogOut,
  Mail,
  Search,
  Trash2,
  Menu
} from 'lucide-react';
import '@assets/css/dashboard.css'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      gender: 'Male',
      dateOfBirth: '1995-05-15',
      class: '10th',
      category: 'Student',
      schoolName: 'ABC School',
      location: 'New York',
      coachName: 'Mike Johnson',
      coachPhone: '9876543210'
    },
    // Add more sample users as needed
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleUserSelection = (userId: any) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const deleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
    setSelectedUsers(selectedUsers.filter(id => id !== userId));
  };

  const deleteSelectedUsers = () => {
    setUsers(users.filter(user => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  const sendEmail = (email: string) => {
    // Implement email functionality here
    console.log(`Sending email to ${email}`);
  };

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {/* <h2>Admin Panel</h2> */}
        </div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item active">
            <Users size={20} />
            <span>Users</span>
          </a>
          <a href="/materialPage" className="nav-item">
            <Package size={20} />
            <span>Material</span>
          </a>
          <a href="/staffPage" className="nav-item">
            <UserCog size={20} />
            <span>Staff</span>
          </a>
          <a href="/adminGalleryPage" className="nav-item">
            <Image size={20} />
            <span>Gallery</span>
          </a>
          <a href="/eventManagementDashboard" className="nav-item">
            <Calendar size={20} />
            <span>Events</span>
          </a>
          <a href="#" className="nav-item logout">
            <LogOut size={20} />
            <span>Logout</span>
          </a>
        </nav>
      </div>

      <div className="main-content">
        <div className="header">
          <button className="menu-button" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="user-actions">
          {selectedUsers.length > 0 && (
            <button className="delete-selected" onClick={deleteSelectedUsers}>
              <Trash2 size={16} />
              Delete Selected ({selectedUsers.length})
            </button>
          )}
        </div>

        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>gender</th>
                <th> dateOfBirth</th>
                <th>Class</th>
                <th>category</th>
                <th>SchoolName</th>
                <th>Location</th>
                <th>CoachName</th>
                <th>CoachPhone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleUserSelection(user.id)}
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
                  <td>{user.location}</td>
                  <td>{user.coachName}</td>
                  <td>{user.coachPhone}</td>
                 <td className="actions">
                    <button onClick={() => sendEmail(user.email)} className="email-btn">
                      <Mail size={16} />
                    </button>
                    <button onClick={() => deleteUser(user.id)} className="delete-btn">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;