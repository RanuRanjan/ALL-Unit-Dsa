async function api(){
    return new Promise (resolve =>{
        setTimeout (()=>{resolve ("b")},50)
    })
}

async function log(){
    setTimeout (()=>console.log("a"),10)
    console.log(await api());
    console.log('c');
}
log()