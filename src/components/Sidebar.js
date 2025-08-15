import React from 'react';
import { Home, Users, BookOpen, Calendar, FileText, Music, Play, CreditCard, UserPlus, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Users, label: 'My Students' },
    { icon: BookOpen, label: 'Courses' },
    { icon: Calendar, label: 'Calendar' },
    { icon: FileText, label: 'Assignment' },
    { icon: Music, label: 'Music Library' },
    { icon: Play, label: 'Practice Studio' },
    { icon: CreditCard, label: 'Payment Summary' },
    { icon: UserPlus, label: 'Refer & Earn' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">UPKRAFT</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`sidebar-nav-item ${item.active ? 'active' : ''}`}
          >
            <item.icon className="sidebar-nav-icon" size={20} />
            <span className="sidebar-nav-label">{item.label}</span>
          </a>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <a href="#" className="sidebar-nav-item">
          <LogOut className="sidebar-nav-icon" size={20} />
          <span className="sidebar-nav-label">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
