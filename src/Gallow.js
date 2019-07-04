import React from 'react';

const Gallow = (props)=> (
  <svg viewBox='0 0 100 100' className='Gallow'>
    <rect x={5} y={90} height={5}
          width={40} fill='black' />
    <polyline fill='none' stroke='black'
              points='25,90 25,10 75,10 75,20'/>

    {props.strikes > 0 ? (
      <circle cx={75} cy={28} r={8} fill='none' stroke='black' />
    ):null}

    {props.strikes > 1 ? (
      <polyline fill='none' stroke='black' points='75,36 75,40'/>
    ): null}

    {props.strikes > 2 ? (
      <ellipse cx={75} cy={52} rx={8} ry={12} fill='none' stroke='black'/>
    ): null}

    {props.strikes > 3 ? (
     <polyline fill='none' stroke='black' points='81.4,45 85,40'/>
    ): null}

    {props.strikes > 4 ? (
      <polyline fill='none' stroke='black' points='68.6,45 65,40'/>
    ): null}

    {props.strikes > 5 ? (
      <polyline fill='none' stroke='black' points='81.4,59 85,69'/>
    ): null}

    {props.strikes > 6 ? (
      <polyline fill='none' stroke='black' points='68.6,59 65,69'/>
    ): null}
  </svg>
);

export default Gallow;
