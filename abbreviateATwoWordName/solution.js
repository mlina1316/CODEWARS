function abbrevName(name){
  let splitname = name.split(' ');

  let initials = '';
  for(var i=0; i<splitname.length; i++)
  {
    if (i === splitname.length-1) {
      initials += splitname[i].substr(0, 1).toUpperCase();
    }
    else {
      initials += splitname[i].substr(0, 1).toUpperCase() + '.';
    }
  }
  return(initials);
}
