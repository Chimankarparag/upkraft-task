import './Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback-section">
      <div className="feedback-card">
        <h4 className="feedback-title">Feedback Pending</h4>
        <div className="feedback-content">
          <div className="feedback-circle">
            <div className="feedback-number">12</div>
          </div>
          <p className="feedback-text">Feedbacks Pending</p>
        </div>
        <button className="feedback-btn">Give Feedback →</button>
      </div>
    </div>
  );
};

export default Feedback;
