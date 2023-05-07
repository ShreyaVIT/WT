//inbuilt sort function
function arrsort(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    ar.sort(function(a,b){return a-b});
    let b = ar.join(" ");
    document.getElementById("result").value = b;
  }
  
  //inbuilt sort function for strings
  function strsort(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    ar.sort();
    let b = ar.join(" ");
    document.getElementById("result").value = b;
  }
  
  //bubble sort function
  function bubblesort(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    for(var i=0;i<ar.length;++i){
        for(var j=0;j<ar.length-i-1;++j){
            if(ar[j]>ar[j+1]){
                var temp = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = temp;
            }
        }
    }
    let b = ar.join(" ");
    document.getElementById("result").value = b;
  }
  
  //insertion sort function
  function insertionsort(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    let i,key,j;
    for (i=1;i<ar.length;i++){ 
        key = ar[i]; 
        j = i - 1;
        while(j >= 0 && ar[j] > key){ 
            ar[j + 1] = ar[j]; 
            j = j - 1; 
        } 
        ar[j + 1] = key; 
    }
    let b = ar.join(" ");
    document.getElementById("result").value = b;
  }
  
  //inbuilt reverse function
  function arrrev(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    ar.reverse();
    let b = ar.join(" ");
    document.getElementById("result").value = b;
  }
  
  //manual reverse function
  function myarrrev(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    let b = [];
    for(let i=ar.length-1;i>=0;--i){
      b.push(ar[i]);
    }
    let ans = b.join(" ");
    document.getElementById("result").value = ans;
  }
  
  //search an element - linear search
  function searchh(p){
    let s = -1;
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    for(let i=0;i<ar.length;++i){
        if(ar[i]==p){
            s = i;
            break;
        }
    }
    if(s==-1){
        document.getElementById("result").value = -1;
    }else{
        document.getElementById("result").value = s;
    }
  }
  
  //search an element - binary search
  function searchh1(p){
    
      let l = 0;
      let r = ar.length - 1;
      while(l <= r){
         const mid = Math.floor((l + r) / 2); if(p == ar[mid]){
          document.getElementById("result").value = mid;
         }
         else if(p < ar[mid]){
            r = mid - 1;
         }
         else{
            l = mid + 1;
         }
      }
      document.getElementById("result").value = -1;
   }
  
  //length of array
  function arrlength(){
    let a = document.getElementById("arr").value;
    const ar = a.split(" ");
    var count = 0;
    for(var j=0;j<ar.length;++j){
        count++;
    }
    document.getElementById("result").value = count;
  }
  
  //reset the result field
  function resettt(){
    document.getElementById("result").value = '';
  }
  