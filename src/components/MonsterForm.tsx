import React, { useState } from "react";
import { Monster } from "../models/Monster";

interface MonsterFormProps {
  onAdd: (monster: Monster) => void;
}

const MonsterForm: React.FC<MonsterFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [hp, setHp] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, attack, defense, speed, hp, imageUrl });
    setName("");
    setAttack(0);
    setDefense(0);
    setSpeed(0);
    setHp(0);
    setImageUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-5 rounded-lg shadow-md mb-5 max-w-md mx-auto"
    >
      <div className="mb-4 w-96">
        <label className="block text-gray-300 mb-1">Nome:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Arthas"
          required
          className="p-2 rounded w-full placeholder-gray-400 text-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-1">Ataque:</label>
        <input
          type="number"
          value={attack}
          onChange={(e) => setAttack(+e.target.value)}
          className="p-2 rounded w-full placeholder-gray-400 text-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-1">Defesa:</label>
        <input
          type="number"
          value={defense}
          onChange={(e) => setDefense(+e.target.value)}
          className="p-2 rounded w-full placeholder-gray-400 text-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-1">Velocidade:</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(+e.target.value)}
          className="p-2 rounded w-full placeholder-gray-400 text-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-1">HP:</label>
        <input
          type="number"
          value={hp}
          onChange={(e) => setHp(+e.target.value)}
          className="p-2 rounded w-full placeholder-gray-400 text-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-1">URL da Imagem:</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="www.imagestock.com/suaimagem.png"
          className="p-2 rounded w-full placeholder-gray-400 text-gray-500"
        />
      </div>

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Adicionar Monstro
      </button>
    </form>
  );
};

export default MonsterForm;
