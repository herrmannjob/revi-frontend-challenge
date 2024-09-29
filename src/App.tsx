import React, { useState } from "react";
import MonsterForm from "./components/MonsterForm";
import MonsterList from "./components/MonsterList";
import BattleResult from "./components/BattleResult";
import useBattle from "./hooks/useBattle";
import { Monster } from "./models/Monster";

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const { result, battle } = useBattle();

  const addMonster = (monster: Monster) => {
    setMonsters([...monsters, monster]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold my-5">Batalha de Monstros</h1>
      <MonsterForm onAdd={addMonster} />
      <MonsterList monsters={monsters} onBattle={battle} />
      <BattleResult result={result} />
    </div>
  );
};

export default App;
