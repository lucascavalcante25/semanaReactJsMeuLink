
//Buscar Links Salvos
export async function getLinksave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//Salvar Link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksave(key);

    //Se já estiver um link salvo com algum ID  eu não vou deixar duplicar
    const haslink = linksStored.some(link => link.id === newLink.id) // a função .some verifica dentro do array se existe links iguais

    if(haslink){
        console.log("Esse link já existe na lista");
        return;
    }
    //Adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("link salvo com sucesso")

}