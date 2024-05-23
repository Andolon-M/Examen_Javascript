export const saludo = async () => {
console.log('holamundo, soy apiContorller')
}


export const searchPeliculaByName = async (name)=>{
    const res = await fetch(`https://search.imdbot.workers.dev/?q=${name}`)
    let data = await res.json();
   
    return data.description;
}

