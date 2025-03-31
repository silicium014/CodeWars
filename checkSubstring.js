function checkSubstring(str,ending) {
    if (str.includes(ending)) {
        for (let i=ending.length-1, j =str.length-1; i>=0; i--,j--) {
            if(str[j]===ending[i])
                continue;
            else 
                return false;
        }
        return true;
    } else 
        return false;
}
