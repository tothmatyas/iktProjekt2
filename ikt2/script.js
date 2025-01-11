
let selectedItems = [];

const motherboards = [
    {
        image: "Alaplap ",
        type: "ATX",
        name: "ASUS ROG STRIX B550-F",
        params: "AM4, DDR4",
        price: 55000
    },
    {
        image: "Alaplap ",
        type: "ATX",
        name: "MSI MPG B550 GAMING PLUS",
        params: "AM4, DDR4",
        price: 45000
    },
    {
        image: "Alaplap ",
        type: "ATX",
        name: "Gigabyte B650 GAMING X",
        params: "AM5, DDR5",
        price: 75000
    },
    {
        image: "Alaplap ",
        type: "mATX",
        name: "ASRock B550M-HDV",
        params: "AM4, DDR4",
        price: 35000
    },
    {
        image: "Alaplap ",
        type: "ATX",
        name: "ASUS PRIME Z690-P",
        params: "LGA1700, DDR5",
        price: 85000
    }
];


const cpus = [
    {
        image: "CPU ",
        type: "CPU",
        name: "AMD Ryzen 5 5600X",
        params: "3.7GHz, 6 mag",
        price: 85000
    },
    {
        image: "CPU ",
        type: "CPU",
        name: "Intel Core i5-12600K",
        params: "3.7GHz, 10 mag",
        price: 95000
    },
    {
        image: "CPU ",
        type: "CPU",
        name: "AMD Ryzen 7 5800X",
        params: "3.8GHz, 8 mag",
        price: 115000
    },
    {
        image: "CPU ",
        type: "CPU",
        name: "Intel Core i7-12700K",
        params: "3.6GHz, 12 mag",
        price: 135000
    },
    {
        image: "CPU ",
        type: "CPU",
        name: "AMD Ryzen 9 5900X",
        params: "3.7GHz, 12 mag",
        price: 155000
    }
];


const rams = [
    {
        image: "RAM ",
        type: "DDR4",
        name: "Corsair Vengeance LPX",
        params: "16GB, 3200MHz",
        price: 25000
    },
    {
        image: "RAM ",
        type: "DDR4",
        name: "G.Skill Ripjaws V",
        params: "32GB, 3600MHz",
        price: 45000
    },
    {
        image: "RAM ",
        type: "DDR5",
        name: "Kingston FURY Beast",
        params: "16GB, 5200MHz",
        price: 35000
    },
    {
        image: "RAM ",
        type: "DDR4",
        name: "Crucial Ballistix",
        params: "32GB, 3200MHz",
        price: 40000
    },
    {
        image: "RAM ",
        type: "DDR5",
        name: "G.Skill Trident Z5",
        params: "32GB, 6000MHz",
        price: 65000
    }
];


const gpus = [
    {
        image: "GPU ",
        type: "GPU",
        name: "NVIDIA RTX 3060",
        params: "12GB GDDR6",
        price: 150000
    },
    {
        image: "GPU ",
        type: "GPU",
        name: "AMD RX 6600 XT",
        params: "8GB GDDR6",
        price: 140000
    },
    {
        image: "GPU ",
        type: "GPU",
        name: "NVIDIA RTX 3070",
        params: "8GB GDDR6",
        price: 200000
    },
    {
        image: "GPU ",
        type: "GPU",
        name: "AMD RX 6700 XT",
        params: "12GB GDDR6",
        price: 180000
    },
    {
        image: "GPU ",
        type: "GPU",
        name: "NVIDIA RTX 3080",
        params: "10GB GDDR6X",
        price: 300000
    }
];


const storages = [
    {
        image: "Storage ",
        type: "SSD",
        name: "Samsung 970 EVO Plus",
        params: "1TB, NVMe",
        price: 45000
    },
    {
        image: "Storage ",
        type: "HDD",
        name: "Seagate Barracuda",
        params: "2TB, 7200RPM",
        price: 20000
    },
    {
        image: "Storage ",
        type: "SSD",
        name: "WD Black SN850",
        params: "2TB, NVMe",
        price: 85000
    },
    {
        image: "Storage ",
        type: "SSD",
        name: "Crucial MX500",
        params: "1TB, SATA",
        price: 35000
    },
    {
        image: "Storage ",
        type: "HDD",
        name: "WD Red Plus",
        params: "4TB, 5400RPM",
        price: 40000
    }
];

const monitors = [
    {
        image: "Monitor ",
        type: "IPS",
        name: "LG 27GL850-B",
        params: '27", 1440p, 144Hz',
        price: 150000
    },
    {
        image: "Monitor ",
        type: "VA",
        name: "Samsung Odyssey G5",
        params: '32", 1440p, 165Hz',
        price: 120000
    },
    {
        image: "Monitor ",
        type: "IPS",
        name: "ASUS TUF Gaming",
        params: '24", 1080p, 144Hz',
        price: 80000
    },
    {
        image: "Monitor ",
        type: "TN",
        name: "BenQ ZOWIE XL2411P",
        params: '24", 1080p, 144Hz',
        price: 70000
    },
    {
        image: "Monitor ",
        type: "IPS",
        name: "Dell S2721DGF",
        params: '27", 1440p, 165Hz',
        price: 160000
    }
];


const mice = [
    {
        image: "Mouse ",
        type: "Gaming",
        name: "Logitech G Pro X Superlight",
        params: "25600 DPI, Wireless",
        price: 45000
    },
    {
        image: "Mouse ",
        type: "Gaming",
        name: "Razer DeathAdder V2",
        params: "20000 DPI, Wired",
        price: 25000
    },
    {
        image: "Mouse ",
        type: "Gaming",
        name: "SteelSeries Rival 600",
        params: "12000 DPI, Wired",
        price: 30000
    },
    {
        image: "Mouse ",
        type: "Office",
        name: "Logitech MX Master 3",
        params: "4000 DPI, Wireless",
        price: 35000
    },
    {
        image: "Mouse ",
        type: "Gaming",
        name: "Glorious Model O",
        params: "12000 DPI, Wired",
        price: 20000
    }
];


const keyboards = [
    {
        image: "Keyboard ",
        type: "Mechanikus",
        name: "Ducky One 2 Mini",
        params: "Cherry MX Red",
        price: 45000
    },
    {
        image: "Keyboard ",
        type: "Mechanikus",
        name: "Logitech G Pro X",
        params: "GX Blue Clicky",
        price: 40000
    },
    {
        image: "Keyboard ",
        type: "Mechanikus",
        name: "Razer Huntsman Elite",
        params: "Optical Switch",
        price: 65000
    },
    {
        image: "Keyboard ",
        type: "Membrán",
        name: "Logitech K120",
        params: "Standard Layout",
        price: 3000
    },
    {
        image: "Keyboard ",
        type: "Mechanikus",
        name: "Corsair K95 RGB",
        params: "Cherry MX Speed",
        price: 55000
    }
];

function createCards(componentArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    componentArray.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <p>Típus: ${item.type}</p>
            <p>Név: ${item.name}</p>
            <p>Paraméterek: ${item.params}</p>
            <p>Ár: ${item.price} Ft</p>
        `;
        
        card.addEventListener('click', () => selectForComparison(item, card));
        container.appendChild(card);
    });
}
function showCards() {
    const cardGroups = document.querySelectorAll('.card-group');
    cardGroups.forEach(group => group.style.display = 'none');

    const select = document.getElementById('componentSelect');
    const selectedGroup = document.getElementById(select.value + '-cards');
    
    if (selectedGroup) {
        selectedGroup.style.display = 'flex';
        switch(select.value) {
            case 'motherboard':
                createCards(motherboards, 'motherboard-cards');
                break;
            case 'cpu':
                createCards(cpus, 'cpu-cards');
                break;
            case 'ram':
                createCards(rams, 'ram-cards');
                break;
            case 'gpu':
                createCards(gpus, 'gpu-cards');
                break;
            case 'storage':
                createCards(storages, 'storage-cards');
                break;
            case 'monitor':
                createCards(monitors, 'monitor-cards');
                break;
            case 'mouse':
                createCards(mice, 'mouse-cards');
                break;
            case 'keyboard':
                createCards(keyboards, 'keyboard-cards');
                break;
        }
    }
}

window.onload = function() {
    showCards();
};

function selectForComparison(item, card) {
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selectedItems = selectedItems.filter(selected => selected.name !== item.name);
    } else if (selectedItems.length < 2) {
        card.classList.add('selected');
        selectedItems.push(item);
    }

    updateSelectedItemsDisplay();
    document.getElementById('compare-btn').disabled = selectedItems.length !== 2;
}

function updateSelectedItemsDisplay() {
    document.getElementById('selected-item-1').textContent = 
        selectedItems[0] ? `Item 1: ${selectedItems[0].name}` : 'Item 1: Not selected';
    document.getElementById('selected-item-2').textContent = 
        selectedItems[1] ? `Item 2: ${selectedItems[1].name}` : 'Item 2: Not selected';
}

function compareItems() {
    if (selectedItems.length !== 2) return;

    const comparisonTable = document.createElement('table');
    comparisonTable.className = 'comparison-table';

    const headers = ['Feature', selectedItems[0].name, selectedItems[1].name, 'Better Option'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    comparisonTable.appendChild(headerRow);

    const features = ['type', 'params', 'price'];
    const featureNames = {
        type: 'Type',
        params: 'Parameters',
        price: 'Price'
    };

    features.forEach(feature => {
        const row = document.createElement('tr');
        

        const featureCell = document.createElement('td');
        featureCell.textContent = featureNames[feature];
        row.appendChild(featureCell);

        // Item 1 value
        const value1Cell = document.createElement('td');
        value1Cell.textContent = selectedItems[0][feature];
        row.appendChild(value1Cell);

        const value2Cell = document.createElement('td');
        value2Cell.textContent = selectedItems[1][feature];
        row.appendChild(value2Cell);

        const resultCell = document.createElement('td');
        if (feature === 'price') {
            const better = selectedItems[0].price < selectedItems[1].price ? 0 : 1;
            resultCell.textContent = selectedItems[better].name;
            value1Cell.classList.toggle('better', better === 0);
            value2Cell.classList.toggle('better', better === 1);
        } else {
            resultCell.textContent = 'Compare manually';
        }
        row.appendChild(resultCell);

        comparisonTable.appendChild(row);
    });

    const resultContainer = document.getElementById('comparison-result');
    resultContainer.innerHTML = '';
    resultContainer.appendChild(comparisonTable);
}
