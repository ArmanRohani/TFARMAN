import React, { useState } from 'react';
import AnimatedVisual from './AnimatedVisual'; // Import the new component
import styles from './AlgoEngineSection.module.css'; // Create this CSS Module

const AlgoEngineSection = () => {
  const [showResults, setShowResults] = useState(false);

  const handleExecuteTrade = () => {
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <section className={styles.algoEngineSection} id="algo-engine">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2 className="section-title">Craft Your Edge with the <span className="text-gradient">Algo Engine</span></h2>
          <p className="section-description">Our intuitive visual builder makes complex strategy creation simple and accessible. No code, all power. <br /><strong>Click "Execute Trade" below to see simulated results!</strong></p>
        </div>
        <div className={`${styles.algoEngineContainer} reveal-on-scroll`} style={{ transitionDelay: '0.15s' }}>
          <div className={styles.algoEngineContent}>
            <h3>Design, Test, & Deploy with Ease</h3>
            <p>The Tradefolio Algo Engine is your canvas for innovation. Seamlessly:</p>
            <ul>
              <li><i className="fas fa-check-circle"></i>Choose from a rich library of technical & fundamental indicators.</li>
              <li><i className="fas fa-check-circle"></i>Define precise buy/sell criteria with logical operators.</li>
              <li><i className="fas fa-check-circle"></i>Instantly backtest and refine your custom algorithms.</li>
              <li><i className="fas fa-check-circle"></i>Deploy with confidence and automate your trading.</li>
            </ul>
            <p style={{ marginTop: '1.5rem' }}>Transform your trading ideas into automated success stories.</p>
          </div>
          
          <div className={styles.visualWrapper}> {/* Wrapper for positioning popup */}
            <AnimatedVisual onExecute={handleExecuteTrade} />
            {showResults && (
              <div className={`${styles.backtestResultsPopup} ${showResults ? styles.visible : ''}`}>
                <h4>Simulated Backtest Results</h4>
                <div className={styles.resultMetric}>Net Profit: <span className={styles.positive}>+$1,250.75</span></div>
                <div className={styles.resultMetric}>Win Rate: <span>72%</span></div>
                <div className={styles.resultMetric}>Sharpe Ratio: <span>1.85</span></div>
                <div className={styles.resultMetric}>Max Drawdown: <span className={styles.negative}>-5.2%</span></div>
                <div className={styles.simpleChartPlaceholder}>
                  {/* Simple bar chart representation */}
                  {[40, 60, 30, 70, 50, 80, 45].map((height, index) => (
                    <div key={index} style={{ height: `${height}%`, backgroundColor: index % 2 === 0 ? 'var(--primary-accent)' : 'var(--secondary-accent)' }}></div>
                  ))}
                </div>
                <button className={`cta-button ${styles.closeResultsBtn}`} onClick={handleCloseResults}>Close Results</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlgoEngineSection;
