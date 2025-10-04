import { Send, Bell } from 'lucide-react';
import ProfileCard from './ProfileCard';
import UpcomingLessons from './UpcomingLessons';
import PerformanceCharts from './PerformanceCharts';
import ReferEarn from './ReferEarn';
import Feedback from './Feedback';
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
          <div className="dashboard-icons">
            <button className="icon-btn">
              <Send size={20} />
            </button>
            <button className="icon-btn notification-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
          </div>
          <span className="user-name">Sherry Wolf</span>
          <div className="user-avatar">
            <img src="https://i.pravatar.cc/40?img=47" alt="User" />
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* First Row: Profile Card + Refer and Earn */}
        <div className="dashboard-row-1">
          <div className="profile-section">
            <ProfileCard />
          </div>
          <div className="refer-section">
            <ReferEarn />
          </div>
        </div>

        {/* Second Row: Upcoming Lessons + Performance Charts + Feedback */}
        <div className="dashboard-row-2">
          <div className="lessons-section">
            <UpcomingLessons />
          </div>
          <div className="performance-section">
            <PerformanceCharts />
          </div>
          <div className="feedback-section">
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
