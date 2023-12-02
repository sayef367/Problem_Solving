// print heart logo
function heartLogo() {
  //row loop
  for(let row = 1; row <= 11; row++) {
    let H = ''; //add * and space
    //column loop
    for(let column = 1; column <= 11; column++) {
      if(row == 1) (column==3 || column==4 || column==8 || column==9) ? H += '*' : H += ' ';
      if(row == 2) (column==2 || column==5 || column==7 || column==10) ? H += '*' : H += ' ';
      if(row == 3) (column==1 || column==6 || column==11) ? H += '*' : H += ' ';
      if(row == 4) (column==1 || column==11) ? H += '*' : H += ' ';
      if(row == 5) (column==2 || column==10) ? H += '*' : H += ' ';
      if(row == 6) (column==3 || column==9) ? H += '*' : H += ' ';
      if(row == 7) (column==4 || column==8) ? H += '*' : H += ' ';
      if(row == 8) (column==5 || column==7) ? H += '*' : H += ' ';
      if(row == 9) (column==6) ? H += '*' : H += ' ';
    };
    //print heart logo after one second
    setTimeout(() => {
      console.log(H);
    }, 1000);
  };
};
//function invoked / call
heartLogo();