import React from "react";
import PropTypes from "prop-types";

const _dashToSpace = str => {
  str = str.replace(/-/g, " ");
  return str;
};

const _renderStats = stats =>
  stats.map((stt, i) => (
    <tr key={stt + i}>
      <th className="is-capitalized">{_dashToSpace(stt.stat.name)}</th>
      <td className="has-text-centered">{stt.base_stat}</td>
      <td className="has-text-centered">{stt.effort}</td>
    </tr>
  )).reverse();

const PokemonStats = ({ stats }) => (
  <div className="columns is-centered is-multiline">
    <div className="column is-full">
      <h4 className="is-size-4">Stats</h4>
    </div>
    <div className="column is-full-mobile is-8-tablet is-narrow-desktop">
      <table className="table">
        <thead>
          <tr>
            <th>Stat</th>
            <th className="has-text-centered">Base Stat</th>
            <th className="has-text-centered">Effort</th>
          </tr>
        </thead>
        <tbody>{_renderStats(stats)}</tbody>
      </table>
    </div>
  </div>
);

PokemonStats.propTypes = {
  stats: PropTypes.array.isRequired
};

export default PokemonStats;
