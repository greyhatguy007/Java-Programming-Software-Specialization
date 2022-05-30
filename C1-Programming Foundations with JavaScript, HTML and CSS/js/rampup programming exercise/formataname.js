function reformatName(first, last) {
    var ans = last + "," + first
    return ans;
}

var result1 = reformatName("Susan", "Rodger");
var result2 = reformatName("Robert", "Duvall");

console.log(result1);
console.log(result2);

//  OUTPUT:
//  Rodger, Susan
//  Duvall, Robert