var arr = [[1], [2, 3, 4], [[5, 6]], 7]

function flattenArray(arr,depth){
    let res=[];
   arr.map((item)=>{
    if(Array.isArray(item) && depth>1){
        res.push(...flattenArray(item))
    }else{
        res.push(item)
    }
   })
   return res;
}

console.log(flattenArray(arr,2));