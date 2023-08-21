class Point {
    x = 1
    y = 2
    scalc(n:number){
        this.x *= n
        this.y *= n
    }
}


const po = new Point()
po.scalc(10)

console.log(po.x , '=-=--=--=', po.y);
