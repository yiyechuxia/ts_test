type Props = {x:number,y:string,z:boolean}

type Type3 = {[Key in keyof Props] : string}