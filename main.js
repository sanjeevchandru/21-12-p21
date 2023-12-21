document.write("20.Find duplicate values in a JavaScript array"+"<br>");
document.write("Original array :[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]"+"<br>");
function test20(arr){
    var x=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                x.push(arr[i],arr[j]);
            }
        }
    }
    return [...new Set(x)];
}
document.write("Duplicate values are : "+test20([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])+"<br><br>");