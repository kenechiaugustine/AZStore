import React from 'react';
import styles from './SignInRecommendation.module.css';

const SignInRecommendation: React.FC = () => {
  return (
    <>
      <div className={styles.signInRecommendationContainer}>
        <div className={styles.signInRecommendationContent}>
          <h1>See personalized recommendations</h1>
          <a className={styles.signInRecommendationLink} href="#">
            Sign In
          </a>
          <p>
            New customer? <a href="#">Start here.</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInRecommendation;
