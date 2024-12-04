"use client"
import React, { useState } from 'react';
import styles from '../Style/staffPage.module.css';

// Types
interface Admin {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'super-admin';
  status: 'active' | 'banned';
  createdAt: Date;
}

// SVG Icons
const Icons = {
  Add: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
  Ban: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  ),
  Delete: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  )
};

// Create Admin Form Component
const CreateAdminForm: React.FC<{ 
  onCreateAdmin: (admin: Omit<Admin, 'id' | 'status' | 'createdAt'>) => void 
}> = ({ onCreateAdmin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'admin' | 'super-admin'>('admin');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !email) {
      alert('Please fill in all fields');
      return;
    }

    onCreateAdmin({ username, email, role });
    
    // Reset form
    setUsername('');
    setEmail('');
    setRole('admin');
  };

  return (
    <div className={styles.createAdminContainer}>
      <h2>
        <Icons.Add /> Create New Admin
      </h2>
      <form onSubmit={handleSubmit} className={styles.adminForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="role">Admin Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value as 'admin' | 'super-admin')}
          >
            <option value="admin">Regular Admin</option>
            <option value="super-admin">Super Admin</option>
          </select>
        </div>
        <button type="submit" className={styles.createButton}>
          <Icons.Add /> Create Admin
        </button>
      </form>
    </div>
  );
};

// Admin Table Component
const AdminTable: React.FC<{ 
  admins: Admin[], 
  onDeleteAdmin: (id: string) => void,
  onBanAdmin: (id: string) => void 
}> = ({ admins, onDeleteAdmin, onBanAdmin }) => {
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  return (
    <div className={styles.adminTableContainer}>
      <table className={styles.adminTable}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr 
              key={admin.id} 
              className={admin.status === 'banned' ? styles.bannedRow : ''}
            >
              <td>{admin.username}</td>
              <td>{admin.email}</td>
              <td>{admin.role === 'super-admin' ? 'Super Admin' : 'Admin'}</td>
              <td>
                <span className={`${styles.statusBadge} ${
                  admin.status === 'banned' ? styles.bannedStatus : styles.activeStatus
                }`}>
                  {admin.status === 'banned' ? 'Banned' : 'Active'}
                </span>
              </td>
              <td>{admin.createdAt.toLocaleDateString()}</td>
              <td className={styles.actionCell}>
                {confirmDelete === admin.id ? (
                  <div className={styles.confirmDelete}>
                    <button 
                      onClick={() => {
                        onDeleteAdmin(admin.id);
                        setConfirmDelete(null);
                      }}
                      className={styles.confirmDeleteBtn}
                    >
                      Confirm Delete
                    </button>
                    <button 
                      onClick={() => setConfirmDelete(null)}
                      className={styles.cancelBtn}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className={styles.actionButtons}>
                    <button 
                      onClick={() => onBanAdmin(admin.id)}
                      className={styles.banBtn}
                      disabled={admin.status === 'banned'}
                    >
                      <Icons.Ban /> {admin.status === 'banned' ? 'Banned' : 'Ban'}
                    </button>
                    <button 
                      onClick={() => setConfirmDelete(admin.id)}
                      className={styles.deleteBtn}
                    >
                      <Icons.Delete /> Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Admin Staff Management Page
const AdminStaffManagement: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([
    {
      id: '1',
      username: 'john_admin',
      email: 'john@example.com',
      role: 'super-admin',
      status: 'active',
      createdAt: new Date()
    },
    {
      id: '2',
      username: 'john_admin',
      email: 'john@example.com',
      role: 'super-admin',
      status: 'active',
      createdAt: new Date()
    },
    {
      id: '3',
      username: 'jane_admin',
      email: 'jane@example.com',
      role: 'admin',
      status: 'active',
      createdAt: new Date()
    }
  ]);

  const handleCreateAdmin = (adminData: Omit<Admin, 'id' | 'status' | 'createdAt'>) => {
    const newAdmin: Admin = {
      ...adminData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'active',
      createdAt: new Date()
    };

    setAdmins([...admins, newAdmin]);
  };

  const handleDeleteAdmin = (adminId: string) => {
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };

  const handleBanAdmin = (adminId: string) => {
    setAdmins(admins.map(admin => 
      admin.id === adminId 
        ? { ...admin, status: admin.status === 'active' ? 'banned' : 'active' } 
        : admin
    ));
  };

  return (
    <div className={styles.adminStaffManagement}>
      <header className={styles.pageHeader}>
        <h1>Admin Staff Management</h1>
      </header>
      
      <CreateAdminForm onCreateAdmin={handleCreateAdmin} />
      
      <AdminTable 
        admins={admins}
        onDeleteAdmin={handleDeleteAdmin}
        onBanAdmin={handleBanAdmin}
      />
    </div>
  );
};

export default AdminStaffManagement;