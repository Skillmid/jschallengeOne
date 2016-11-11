 /* Skillmid Challenge Updated Solution 5*/
 module.exports = function (someAdjective) 
 	
 	{
 		if (typeof someAdjective != "string")
 		{
 			return 'Invalid parameters';
 		}
 		else
 		{
      var myStr = "Learning to code is ";
      
      var myStr = (myStr += someAdjective);
     return myStr;
 }
    }
  