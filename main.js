export function main(dtoIn) {
  const { count, age } = dtoIn;

  const maleNames = [
    "Jan", "Petr", "Martin", "Tomáš", "Lukáš",
    "David", "Jakub", "Michal", "Ondřej", "Daniel",
    "Radek", "Marek", "Roman", "Jiří", "Adam",
    "Filip", "Matěj", "Vojtěch", "Karel", "Josef"
  ];

  const femaleNames = [
    "Anna", "Jana", "Petra", "Lucie", "Kateřina",
    "Markéta", "Tereza", "Veronika", "Eliška", "Barbora",
    "Klára", "Nikola", "Adéla", "Kristýna", "Monika",
    "Ivana", "Michaela", "Lenka", "Hana", "Alena"
  ];

  const surnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
    "Procházka", "Kučera", "Veselý", "Horák", "Němec",
    "Pokorný", "Hájek", "Král", "Blažek", "Fiala",
    "Růžička", "Krejčí", "Beneš", "Pospíšil", "Jelínek"
  ];

  const workloads = [10, 20, 30, 40];
  const employees = [];

  for (let i = 0; i < count; i++) {
    const gender = Math.random() < 0.5 ? "male" : "female";

    const name =
      gender === "male"
        ? randomItem(maleNames)
        : randomItem(femaleNames);

    const surname = randomItem(surnames);
    const workload = randomItem(workloads);
    const birthdate = generateBirthdate(age.min, age.max);

    employees.push({
      gender,
      name,
      surname,
      birthdate,
      workload
    });
  }

  return employees;
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateBirthdate(minAge, maxAge) {
  const now = Date.now();
  const yearMs = 365.25 * 24 * 60 * 60 * 1000;

  const minTime = now - maxAge * yearMs;
  const maxTime = now - minAge * yearMs;

  const randomTime =
    minTime + Math.random() * (maxTime - minTime);

  return new Date(randomTime).toISOString();
}

module.exports = main;