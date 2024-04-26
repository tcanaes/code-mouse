
// Get maps list from server
let mapsList = {};
fetch('/client/maps').
    then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error('/client/maps API request failed');
    })
    .then(data => {
        data.forEach(map => {
            if (!mapsList[map.dificulty])
                mapsList[map.dificulty] = { maps: [] };
            mapsList[map.dificulty].maps.push({ map });
        });
        fillMenuListboxDificulty(mapsList);
    })
    .catch(error => {
        console.error(error);
    });


// Execute after page finished loading
window.addEventListener('load', function () {
    const menuScreen = document.getElementById('menu-screen');
    menuScreen.style.display = "flex";

})

function fillMenuListboxDificulty(mapsList) {
    console.log(mapsList);
    let options = '';
    for (dificulty in mapsList)
        options += '<option value="' + dificulty + '">' + dificulty + '</option>';
    document.getElementById('menu-input-dificulty').innerHTML = options;
    document.getElementById('menu-input-dificulty').addEventListener('change', event => { fillMenuListboxLevel(event, mapsList) });
}

function fillMenuListboxLevel(event, mapList) {
    document.getElementById('menu-input-level').innerHTML = '';
    let options = '';
    mapList[event.target.value].maps.forEach(map => options += '<option value="' + map.map.level + '">' + map.map.level + '</option>');
    document.getElementById('menu-input-level').innerHTML = options;
}