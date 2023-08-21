console.log(typeof 'hello');

let p = { x : 1 , y :10};


const test_typeof = (params:typeof p) =>{
    console.log(params);
    
}
test_typeof({x:100 , y:200})

let num : typeof p.x