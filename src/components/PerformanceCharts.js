import './PerformanceCharts.css';

const PerformanceCharts = () => {
  return (
    <div className="performance-charts">
      <div className="chart-container">
        <div className="chart-card course-performance">
          <h4 className="chart-title">Overall Course Performance</h4>
          <div className="chart-content">
            <div className="circular-chart">
              <div className="circle-progress course-progress">
                <div className="circle-inner">
                  <span className="score">7.6</span>
                  <span className="score-max">/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card student-performance">
          <h4 className="chart-title">Overall Student Performance</h4>
          <div className="chart-content">
            <div className="circular-chart">
              <div className="circle-progress student-progress">
                <div className="circle-inner">
                  <span className="score">6.6</span>
                  <span className="score-max">/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;
