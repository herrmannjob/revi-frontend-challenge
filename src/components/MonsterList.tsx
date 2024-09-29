import React from "react";
import { Monster } from "../models/Monster";

interface MonsterListProps {
  monsters: Monster[];
  onBattle: (monster1: Monster, monster2: Monster) => void;
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters, onBattle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {monsters.map((monster, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
        >
          <img
            src={monster.imageUrl}
            alt={monster.name}
            className="h-24 mx-auto mb-2"
          />
          <h3 className="text-xl font-semibold">{monster.name}</h3>
          <button
            onClick={() =>
              onBattle(monster, monsters[(index + 1) % monsters.length])
            }
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Lutar com {monsters[(index + 1) % monsters.length]?.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MonsterList;
