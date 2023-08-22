const getProp = <Type,Key extends keyof Type>(params:Type,key:Key) =>{
    return params[key]
}

getProp({name:"梁秀萍",age:18},'name')
getProp('abc',1)
getProp(['a'], 'length')
getProp([1],111)