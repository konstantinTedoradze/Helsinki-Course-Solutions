import React from "react";
import StaticLine from './StaticLine';

const Statistics = ({ good, neutral, bad, allClicks, average }) => {
  return (
    <div>
      <h2>statics</h2>
      {allClicks === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <table>
          <tbody>
            <StaticLine text='Good' value={good} />
            <StaticLine text='Neutral' value={neutral} />
            <StaticLine text='Bad' value={bad} />
            <StaticLine text='All' value={allClicks} />
            <StaticLine text='Average' value={average} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistics;
