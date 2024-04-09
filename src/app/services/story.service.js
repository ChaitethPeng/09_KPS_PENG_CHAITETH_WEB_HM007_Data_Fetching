//get all movice
export async function getAllStoryService (){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = res.json();
    return data;
}

export async function getStoryByTypeService(name){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${name}`);
    //convert from json to object to javascript objrct
    const data = res.json();
    return data;
}

export async function getStoryByIdService(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    //convert from json to object to javascript objrct
    const data = res.json();
    return data;
}