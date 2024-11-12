let str1 = "abc";
let str2 = "wmdrt";

function mergingStringsAlternately(str1, str2) {
    let str3="";
    let i = 0;
    let j = 0;
    while ((i <str1.length) && (j < str2.length)) {
        str3 += str1[i++];
        str3 += str2[j++];
    }
    str3 += str1.substring(i);
    str3 += str2.substring(j);
    return str3;
}

console.log(mergingStringsAlternately(str1, str2))