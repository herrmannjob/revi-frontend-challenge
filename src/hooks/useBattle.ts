import { useState } from "react";
import { Monster } from "../models/Monster";

const useBattle = () => {
  const [result, setResult] = useState<string | null>(null);

  const battle = (monster1: Monster, monster2: Monster) => {
    let hp1 = monster1.hp;
    let hp2 = monster2.hp;
    let round = 0;

    while (hp1 > 0 && hp2 > 0) {
      round++;
      const damage1 = Math.max(1, monster1.attack - monster2.defense);
      const damage2 = Math.max(1, monster2.attack - monster1.defense);

      if (monster1.speed >= monster2.speed) {
        hp2 -= damage1;
        if (hp2 > 0) hp1 -= damage2;
      } else {
        hp1 -= damage2;
        if (hp1 > 0) hp2 -= damage1;
      }
    }

    const winner = hp1 <= 0 ? monster2.name : monster1.name;
    setResult(`O vencedor é: ${winner} após ${round} rodadas!`);
  };

  return { result, battle };
};

export default useBattle;
