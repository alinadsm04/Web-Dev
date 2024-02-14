alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //1, then 2, because alert(1) is undefined
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //1, then underfined
alert( null || 2 && 3 || 4 ); //3


//Check the range between
if (age >= 14 && age <= 90)

//Check the range outside
//1. using !
if (!(age >= 14 && age <= 90))
//2. without using !
if (age < 14 || age > 90)

//A question about "if"
if (-1 || 0) alert( 'first' ); //will work
if (-1 && 0) alert( 'second' ); //won't work
if (null || -1 && 1) alert( 'third' ); //will work
