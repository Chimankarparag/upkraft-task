import './ReferEarn.css';

const ReferEarn = () => {
  return (
    <div className="refer-earn">
      <div className="refer-content">
        <div className="refer-text">
          <h3 className="refer-title">Refer and Earn</h3>
          <p className="refer-description">
            Get rewarded with every successful referral
          </p>
        </div>
        <div className="refer-image">
          <img
            src="https://i.pravatar.cc/120?img=48"
            alt="Happy person"
            className="refer-person"
          />
        </div>
      </div>
      <button className="refer-button">
        Refer Now →
      </button>
    </div>
  );
};

export default ReferEarn;
