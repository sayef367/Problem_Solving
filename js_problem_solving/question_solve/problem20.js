// Efficient Teams A coding competition is being organized on the HackerRank platform. The participants need to be grouped into teams where each team has exactly two candidates. There are n candidates, where each candidate has a skill denoted by skill[i]. A total of (n/2) teams are to be formed, such that the total skill of each team is the same. The efficiency of a team is defined as the product of the skill levels of its two members, i.e., for the skills [1, 3], the efficiency of the team is 1∗3 =3. Find the sum of efficiencies of all teams that can be formed satisfying the criteria. If there is no way to create teams that satisfy the conditions, return −1. Note: It can be shown that the answer is always unique. Example The skills of the candidates are skill =[1,2,3,2]. They can be paired as [[1,3],[2,2]]. The sum of skills for each team is the same, i.e., 4. The efficiency is computed as: - Efficiency of [1,3]=1∗3=3 - Efficiency of [2,2]=2∗2=4 Return the sum of efficiencies, 3+4=7.
// input [1,2,3,2]
// output 7

const inputSkill = [1,2,3,2];

function getTotalEfficiency(skill) {
  const skillSize = skill.length;
  const arr = [];
  //Ascending order 
  skill.sort(function(a, b){return a - b});
  //store first condition
  let sum = skill[0] + skill[skillSize - 1];
  //push first array
  arr.push(skill[0] * skill[skillSize - 1]);
  //loop skill
  for(let i = 1; i < skillSize / 2; i++) {
    if((skill[i] + skill[skillSize - i - 1]) === sum) {
      arr.push(skill[i] * skill[skillSize - i - 1]);
    } else {
      return -1;
    };
  };
  return arr.reduce((total, num) => total + num);
};

console.log(getTotalEfficiency(inputSkill));