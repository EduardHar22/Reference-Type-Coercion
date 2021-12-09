"use strict"

//  1. we have null + undefined, in console we will have NaN,
//  because null will turn to 0 number; 
console.log(null + undefined);

//  2. we have null + true, in console we will have 1 number,
//  because null will turn to 0 and true will turn to 1 then we add 0 to 1;
console.log(null + true);

//  3. we have null + false, in console we will have 0 number,
//  because both will turn to 0;
console.log(null + false);

//  4. we have null + 3, in console we will have 3 number,
//  because null will turn to 0 and will add to 3;
console.log(null + 3);

//  5. we have null + NaN, in console we will have NaN,
//  because something added to NaN is always NaN;
console.log(null + NaN);

//  6. we have null + "hello", in console we will have "nullhello",
//  because null will concat to string "hello", strings priority is higher in this case;
console.log(null + 'hello');

//  7. we have null + a+b+c+d+e+f, in console we will have "nullabcdef",
//  because null will concat to all this strings, string priority is higher;
console.log(null + "a" + "b" + "c" + "d" + "e" + "f");

//  8. we have undefined + true, in console we will have NaN,
//  because undefined will turn to NaN;
console.log(undefined + true);

//  9. we have undefined + false, in console we will have NaN,
//  because undefined will turn to NaN;
console.log(undefined + false);

//  10. we have undefined + 5, in console we will have NaN,
//  because undefined will turn to NaN;
console.log(undefined + 5);

//  11. we have undefined + NaN, in console we will have NaN,
//  because there are two NaN;
console.log(undefined + NaN);

//  12. we have undefined + "hello", in console we will have "undefinedhello",
//  because there was string thats mean that it will concat;
console.log(undefined + "hello");

//  13. we have undefined + a+b+c+d+e+f, in console we will have "undefinedabcdef",
//  because we have string thats mean that undefined will concat;
console.log(undefined + 'a' + 'b' + 'c' + 'd' + 'e' + 'f');

//  14. we have true + false, in console we will have 1 number,
//  because true will turn into 1 and false into 0;
console.log(true + false);

//  15. we have true + 2, in console we will have 3 number,
//  because true will turn to 1 and add to 2 number;
console.log(true + 2);

//  16. we have true + NaN, in console we will have NaN,
//  because something added to NaN will give NaN;
console.log(true + NaN);

//  17. we have true + a+b+c+d+e+f, in console we will have "trueabcdef",
//  because true will concat to other strings;
console.log(true + 'a' + 'b' + 'c' + 'd' + 'e' + 'f');

//  18. we have false + 4, in console we will have 4 number,
//  because false will turn to 0 number;
console.log(false + 4);

//  19. we have false + NaN, in console we will have NaN,
//  because something added to NaN is NaN;
console.log(false + NaN);

//  20. we have false + "hello", in console we will have "falsehello",
//  it will concat to string because strings priority is higher;
console.log(false + "hello");

//  21. we have false + a+b+c+d+e+f, in console we will have "falseabcdef",
//  because true will concat to other strings;
console.log(false + 'a' + 'b' + 'c' + 'd' + 'e' + 'f'); 

//  22. we have 5 + 3, in console we will have 8;
console.log(5 + 3);

//  23. we have 5 + NaN, in console we will have NaN,
//  because something added to NaN is NaN;
console.log(5 + NaN);

//  24. we have 5 + "hello", in console we will have "5hello" string,
//  because strings priority is higher then numbers;
console.log(5 + "hello");

//  25. we have 5 + a+b+c+d+e+f, in console we will have "5abcdef",
//  because true will concat to other strings;
console.log(5 + 'a' + 'b' + 'c' + 'd' + 'e' + 'f');

//  26. we have "hello" + NaN, in console we will have "helloNaN" string,
//  the NaN will concat to string because strings priority is higher;
console.log("hello" + NaN);

//  27. we have "hello" + a+b+c+d+e+f, in console we will have "helloabcdef",
//  because they are both strings;
console.log("hello" + 'a' + 'b' + 'c' + 'd' + 'e' + 'f');