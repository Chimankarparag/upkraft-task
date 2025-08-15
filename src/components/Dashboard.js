import React from 'react';
import ProfileCard from './ProfileCard';
import UpcomingLessons from './UpcomingLessons';
import PerformanceCharts from './PerformanceCharts';
import ReferEarn from './ReferEarn';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-search">
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
          />
        </div>
        <div className="dashboard-user">
          <span className="user-name">Sherry Wolf</span>
          <div className="user-avatar">
            <img src="https://i.pravatar.cc/40?img=47" alt="User" />
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-main">
          <ProfileCard />
          <UpcomingLessons />
        </div>
        <div className="dashboard-sidebar">
          <PerformanceCharts />
          <ReferEarn />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
