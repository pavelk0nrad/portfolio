// Složka s obrázky
const slozkaSObrazky = '../img/places/';

// Funkce pro načtení obrázků z určité složky
function nactiObrazky() {
    const galerieDiv = document.getElementById('galerie');

    // Načtení seznamu obrázků ze složky
    fetch(slozkaSObrazky)
        .then(response => response.text())
        .then(data => {
            const soubory = data.split('\n');
            
            // Filtrování obrázků s podporovanými příponami
            const podporovanePripony = ['jpg', 'jpeg', 'png', 'gif'];
            const obrazky = soubory.filter(soubor => {
                const pripona = soubor.split('.').pop().toLowerCase();
                return podporovanePripony.includes(pripona);
            });

            // Pro každý obrázek vytvořit div a přiřadit mu třídu podle názvu
            obrazky.forEach(soubor => {
                const obrazekDiv = document.createElement('div');
                obrazekDiv.classList.add(soubor.replace(/\.[^/.]+$/, ''));

                // Vytvoření obrázku a přidání do divu
                const obrazek = document.createElement('img');
                obrazek.src = slozkaSObrazky + soubor;
                obrazekDiv.appendChild(obrazek);

                // Přidání divu do galerie
                galerieDiv.appendChild(obrazekDiv);
            });
        })
        .catch(error => {
            console.error('Chyba při načítání obrázků: ' + error);
        });
}

// Zavolání funkce pro načtení obrázků po načtení stránky
window.addEventListener('load', nactiObrazky);
