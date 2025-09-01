function solution(hp) {
  const WARLORD = 5;
  const SOLDIER = 3;
  const WORKER = 1;

  let unitWarlord = 0;
  let unitSoldier = 0;
  let unitWorker = 0;

  if (hp % WARLORD === 0) unitWarlord = Math.floor(hp / WARLORD);
  else if (hp % WARLORD !== 0) {
    unitWarlord = Math.floor(hp / WARLORD);
    const remainUnitWarlord = hp % WARLORD;
    if (remainUnitWarlord % SOLDIER === 0)
      unitSoldier = Math.floor(remainUnitWarlord / SOLDIER);
    else if (remainUnitWarlord % SOLDIER !== 0) {
      unitSoldier = Math.floor(remainUnitWarlord / SOLDIER);
      const remainUnitSoldier = remainUnitWarlord % SOLDIER;
      unitWorker = Math.floor(remainUnitSoldier / WORKER);
    }
  }

  return unitWarlord + unitSoldier + unitWorker;
}