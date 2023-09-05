// Submissions	Leaderboard	Discussions	Editorial A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
// input "We promptly judged antique ivory buckles for the prize".
// output "not pangram"

const str = "We promptly judged antique ivory buckles for the prize";

function pangrams(s) {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  const data = s.toLowerCase();

  for(let x of alphabet){
    const search = data.match(x);
    if(search === null) return "not pangram";
  };

  return "pangram";
};

console.log(pangrams(str));

