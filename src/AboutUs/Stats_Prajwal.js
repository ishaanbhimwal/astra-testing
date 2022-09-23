import React from "react";
import { useState } from "react";
import '../helpers/css/stats.css';
const Statistics = () => {
  const [stats] = useState([    
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_big', id: 1 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 2 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 3 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 4 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 5 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 6 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_med', id: 7 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_big', id: 8 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 9 },
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 10},
    { head: 'Stat #', body: 'Here goes the statistics for this block', type: 'Stat_small', id: 11 },
  ])

  return (
    <div className="Stat_block">
      {stats.map(stat => (
        <div className={stat.type} key={stat.id} >
          <h2>{ stat.head }{stat.id}</h2>
          <p>{stat.body}</p>
        </div>
      ))}
    </div>
  );
}
 
export default Statistics;
