interface Person {
    name:string
}

interface Cantact{
    phone:string
}

type PersonCantact = Person & Cantact

let pc : PersonCantact = {
    name:"梁秀萍",
    phone:"137222222222"
}