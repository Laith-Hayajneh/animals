alert('Welcome to  the Jungle');
var typeOfUser = "lover"
var typeOfUser ="hater"
var typeOfUser = prompt('Who are you "lover" OR "Hater"?');
if (typeOfUser =="lover")
{
  console.log ('You are lovely')
  
  
}else if (typeOfUser =="hater")
{
  console.log ('We will make you love it.')
  alert ('We will make you love it.')
}

if (typeOfUser =='lover')
{
  alert ('You are lovely')
  var image ='<img src="data:image/png;base64,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" alt = "lovely image">';
  
  document.write(image);
}else if (typeOfUser == 'hater'){

  var image2 ='<img src="img/hater.jpg" alt= "hater"/>'; 
  document.write(image2);
}
var FAV= prompt ('Enter your favorite animals')
document.write ('your favorite animals is '+ FAV + '   .  ');



var name = prompt('Do you want information about cat plese confirm with yes OR no');
if (name == 'yes' )
{

  document.write  ('Cats conserve energy by sleeping for an average of 13 to 14 hours a day.')
  
}



