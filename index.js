const tokenId = 1126460181313327;
const link = "https://superheroapi.com";

const gethero = (id) => {
    fetch(`${link}/api.php/${tokenId}/${id}`).then(response => response.json()).then(json => {
        // console.log(json)

        img = json.image.url
        document.querySelector('div').innerHTML = `<img  src='${img}' width="300px" height="350px"/>`
        document.querySelector('div').innerHTML += `<span><h1>${json.name}</h1><span/>`

        const a = getstats(json.powerstats);

        document.querySelector('div').innerHTML += `${a}`

    
    })
}

const statsemoji = {
    'intelligence': '🧠',
    'power': '✊🏻',
    'speed': '⚡',
    'durability': '🏋🏻‍♂️',
    'combat': '⚔️',
    'strength': '💪🏻'
}
const getstats = (stats) => {
    const status = Object.keys(stats).map(a => {
        return `<p>${statsemoji[a]}${a.toUpperCase()}: ${stats[a]}</p>`
    });
    // console.log(status.join(""));
    return status.join()
}







gethero(Math.floor(Math.random() * 729) + 1)
const id = () => Math.floor(Math.random() * 729) + 1;

const newhero = document.getElementById('newhero');
newhero.onclick = () => gethero(id())

//  img = 'https://www.superherodb.com/pictures2/portraits/10/100/956.jpg'
//  document.querySelector('body').innerHTML = `<img src='${img}' width="300px" height="350px"/>`



const heroinput = document.getElementById('heroinput')
const inputbtn = document.getElementById('inputbtn')


const getSearched = (name) => {

    fetch(`${link}/api.php/${tokenId}/search/${name}`).then(response => response.json()).then(json => {
        // console.log(json.results[0].powerstats.durability);
        img = json.results[0].image.url;
        document.querySelector('div').innerHTML = `<img  src='${img}' width="300px" height="350px"/>`

        document.querySelector('div').innerHTML += `<span><h1>${json.results[0].name}</h1><span/>`

        const a = getsearchedstats(json.results[0].powerstats)
        document.querySelector('div').innerHTML += `${a}`
    })
}



const getsearchedstats = (stats) => {
    console.log(stats);
    const status = Object.keys(stats).map(a => {
        return `<p>${statsemoji[a]}${a.toUpperCase()}: ${stats[a]}</p>`
    });
    
    console.log(status.join(""));
    return status.join()
}


const search = () => heroinput.value;
inputbtn.onclick = () => getSearched(search())