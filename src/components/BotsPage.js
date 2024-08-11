import React, { useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function BotsPage() {
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [bots, setBots] = useState([]);

  const handleAddToArmy = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const handleRemoveFromArmy = (botId) => {
    setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== botId));
  };

  const handleDelete = (botId) => {
    fetch(`http://localhost:8002/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botId));
        setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== botId));
      });
  };

  return (
    <div>
      <YourBotArmy bots={yourBotArmy} onRemoveFromArmy={handleRemoveFromArmy} />
      <BotCollection
        bots={bots}
        onAddToArmy={handleAddToArmy}
        onRemoveFromArmy={handleRemoveFromArmy}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default BotsPage;