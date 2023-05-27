function findmin(arr){
    var min=arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
}

for(i=0; i<arr.length; i++){
    if(arr[i]%5==0){
        console.log(arr[i]);
    }
}
for(i=10; i>=0; i--){
    console.log(i);
}

for(i=0;i<=10; i++){
    if(i%2==0){
        console.log(i)
    }
}

function count (arr){
    let count0=0;
    let count1=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]% ==0)
    }

}
 function sum(arr){
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return arr
 }

 function findnonrepeatedcount(arr){
    
    for(i=0; i<arr.length; i++){
        let count=0;
        for(j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count===1){
            return array[i];
        }
    }
 }