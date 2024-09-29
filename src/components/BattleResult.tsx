import React from "react";

interface BattleResultProps {
  result: string | null;
}

const BattleResult: React.FC<BattleResultProps> = ({ result }) => {
  return (
    <div className="m-5">
      <h2 className="text-2xl font-semibold">{result}</h2>
    </div>
  );
};

export default BattleResult;
