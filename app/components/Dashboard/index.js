import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import './styles.scss';
const Dashboard = props => {
  return (
    <div className="grid">
      <a className="card" onClick={() => props.push('/loto')}>
        <h3>Lô tô &rarr;</h3>
        <p>Lô tô online mấy ba ơi.</p>
      </a>

      <a className="card" onClick={() => props.push('/baucua')}>
        <h3>Bầu cua &rarr;</h3>
        <p>Bầu cua tôm cá đê</p>
      </a>

      <a className="card">
        <h3>Xì dách &rarr;</h3>
        <p>Xì dáchhhhhhhhhh.</p>
      </a>
      <a className="card">
        <h3>Hướng dẫn &rarr;</h3>
        <p>Vô đọc trước khi chơi nha.</p>
      </a>
    </div>
  );
};

export default connect(
  null,
  { push },
)(Dashboard);
