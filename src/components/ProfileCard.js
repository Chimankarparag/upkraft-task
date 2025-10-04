import { Users, BookOpen, Award } from 'lucide-react';
import './ProfileCard.css';

const ProfileCard = () => {
  const stats = [
    { label: 'Total Active Students', value: '30', color: '#6a5acd' },
    { label: 'Total Active Students', value: '30', color: '#6a5acd' },
    { label: 'Total CSAT Score', value: '80%', color: '#6a5acd' },
    { label: 'Total CSAT Score', value: '80%', color: '#6a5acd' },
    { label: 'Assignment Completion Rate', value: '15%', color: '#6a5acd' },
    { label: 'Assignment Completion Rate', value: '15%', color: '#6a5acd' }
  ];

  return (
    <div className="profile-card">
      <div className="profile-main-layout">
        <div className="profile-info-section">
          <div className="profile-info">
            <div className="profile-avatar">
              <img src="https://i.pravatar.cc/80?img=47" alt="Sherry Wolf" />
            </div>
            <div className="profile-details">
              <h3 className="profile-name">Sherry Wolf</h3>
              <p className="profile-role">Piano Tutor</p>
              <div className="profile-badges">
                <span className="badge badge-students">
                  <Users size={14} />
                  Students 30
                </span>
                <span className="badge badge-courses">
                  <BookOpen size={14} />
                  Course 6
                </span>
                <span className="badge badge-reviews">
                  <Award size={14} />
                  Review 3
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
