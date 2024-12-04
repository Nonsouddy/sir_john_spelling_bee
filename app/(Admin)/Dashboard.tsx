"use client"
import Sidebar from '../(Admin)/sideBar';
import UserTable from '../(Admin)/Users';
import styles from '../Style/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
     
      <main className={styles.mainContent}>
        <div><Sidebar /></div>
        <div><UserTable/></div>
      
      
      </main>
    </div>
  );
}
