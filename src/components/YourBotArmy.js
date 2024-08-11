import React from "react";

function YourBotArmy({ bots, onRemoveFromArmy }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <div key={bot.id} className="column">
              <h2>{bot.name}</h2>
              <img>{bot.avatar_url}</img>
              <button
                className="ui mini red button"
                onClick={() => onRemoveFromArmy(bot.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;