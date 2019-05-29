import React from 'react';
import PropTypes from 'prop-types';

const _renderStats = (stats) => (
  stats.map((stt, i) => (
    <tr key={stt + i}>
      <th>{stt.stat.name}</th>
      <td className="has-text-centered">{stt.base_stat}</td>
      <td className="has-text-centered">{stt.effort}</td>
    </tr>
  ))
);

const PokemonStats = ({ stats }) => (
  <div className="columns is-centered is-multiline">
    <div className="column is-full">
      <h4 className="is-size-4 has-text-light">
        Stats
      </h4>
    </div>
    <div className="column is-full">
      <table className="table">
        <thead>
          <tr>
            <th>Stat</th>
            <th className="has-text-centered">Base Stat</th>
            <th className="has-text-centered">Effort</th>
          </tr>
        </thead>
        <tbody>
          {_renderStats(stats)}
        </tbody>
      </table>
    </div>
  </div>
);

PokemonStats.propTypes = {
  stats: PropTypes.array.isRequired
}

export default PokemonStats;