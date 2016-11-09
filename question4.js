/* Skillmid Challenge Solution 4*/
 module.exports = function (a) 
 {
 	if(a<2) 
 	{
 		return false;
 	}
    for (var i = 2; i < a ; i++) 
    {
      if (a%i==0)
      	{
      		return false;
      	}

     else if ( a%i != 0)
      {
      	return true;
      }
    }
    

  }
