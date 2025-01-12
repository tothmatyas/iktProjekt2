
let selectedItems = [];

const motherboards = [
    {
        image: "kepek/alaplap/giga2.png ",
        típus: "ATX",
        name: "Gigabyte AB350 Gaming 3",
        ram: "DDR" + 4,
        socket: "AM" + 4,
        ár: 34290
    },
    {
        image: "kepek/alaplap/asrock-b760.png ",
        típus: "ATX",
        name: "ASRock B760 PRO RS WIFI",
        ram: "DDR" + 5,
        socket: "LGA-1700",
        ár: 66770
    },
    {
        image: "kepek/alaplap/giga-b650m.png ",
        típus: "Micro ATX",
        name: "GIGABYTE B650M AORUS ELITE AX ICE",
        ram: "DDR" + 5,
        socket: "AM" +5,
        ár: 87190
    },
    {
        image: "kepek/alaplap/rog-x670-e.png ",
        típus: "ATX",
        name: "ASUS ROG STRIX X670E-E GAMING WIF",
        ram: "DDR" + 5,
        socket: "AM" +5,
        ár:  258730
    },
    {
        image: "kepek/alaplap/tuf-b550-plus.png ",
        típus: "ATX",
        name: "ASUS TUF Gaming B550-PLUS",
        ram: "DDR" + 4,
        socket: "AM" +4,
        ár: 52370
    },
];


const cpus = [
    {
        image: "kepek/cpu/5-3600.png ",
        name: "AMD Ryzen 5 3600",
        frequency: 3.7 + "GHz",
        socket: "AM" + 4,
        cores: 6,
        threads: 12,
        ár: 32475
    },
    {
        image: "kepek/cpu/5-8600g.png ",
        name: "AMD Ryzen 5 8600G",
        frequency: 4.3 + "GHz",
        socket: "AM" + 5,
        cores: 6,
        threads: 12,
        ár: 77890
    },
    {
        image: "kepek/cpu/7-5700x3d.png ",
        name: "AMD Ryzen 5 5700X3D",
        frequency: 3.0 + "GHz",
        socket: "AM" + 5,
        cores: 8,
        threads: 16,
        ár: 102300
    },
    {
        image: "kepek/cpu/7-9800x3d.png ",
        name: "AMD Ryzen 7 9800X3D",
        frequency: 4.7 + "GHz",
        socket: "AM" + 5,
        cores: 8,
        threads: 16,
        ár: 267990
    },
    {
        image: "kepek/cpu/i5.png",
        name: "Intel Core i5-14400F",
        frequency: 2.5 + "GHz",
        socket: "LGA-1700",
        cores: 10,
        threads: 16,
        ár: 68630
    }
];


const rams = [
    {
        image: "kepek/ram/Corsair.jpg ",
        típus: "DDR4",
        name: "Corsair Dominator Platinum",
        capacity: 32 + "GB",
        speed: 3200 + "MHz",
        ár: 50290
    },
    {
        image: "kepek/ram/Kingston_fury.jpg ",
        típus: "DDR4",
        name: "Kingston FURY Beast  8GB",
        capacity: 8 + "GB",
        speed: 3200 + "MHz",
        ár: 8300
    },
    {
        image: "kepek/ram/Gskill_aegis.jpg",
        típus: "DDR4",
        name: "G.SKILL Aegis ",
        capacity: 16 + "GB",
        speed: 3200 + "MHz",
        ár: 13210
    },
    {
        image: "kepek/ram/Gskill.jpg ",
        típus: "DDR5",
        name: "G.SKILL Trident Z5 Neo RGB",
        capacity: 64 + "GB",
        speed: 6000 + "MHz",
        ár: 104000
    },
    {
        image: "kepek/ram/KIngston_beast.jpg ",
        típus: "DDR5",
        name: "Kingston Fury Beast 32GB",
        capacity: 32 + "GB",
        speed: 6000 + "MHz",
        ár: 55360
    }
];


const gpus = [
    {
        image: "kepek/gpu/1650.png ",
        name: "NVIDIA GTX 1650",
        generation: "GDDR6",
        ram: "4" + "GB",
        ár: 104900
    },
    {
        image: "kepek/gpu/4060.png ",
        name: "NVIDIA RTX 4060",
        generation: "GDDR6",
        ram: "8" + "GB",
        ár: 144020
    },
    {
        image: "kepek/gpu/4070tisuper.png ",
        name: "NVIDIA RTX 4070 Ti SUPER",
        generation: "GDDR6X",
        ram: 16 + "GB",
        ár: 404060
    },
    {
        image: "kepek/gpu/6600xt.png",
        name: "Radeon RX 6600 XT",
        generation: "GDDR6",
        ram: 8 + "GB",
        ár: 159990
    },
    {
        image: "kepek/gpu/7800xt.png ",
        name: "Radeon RX 7800 XT",
        generation: "GDDR6",
        ram: 16 + "GB",
        ár: 252540
    }
];


const storages = [
    {
        image: "kepek/tarhely/BarraCuda.jpg ",
        típus: "HDD",
        rpm: 6 + "Mb/s",
        name: "Seagate BarraCuda 3.5",
        capacity: 2000 + "GB",
        ár: 25800
    },
    {
        image: "kepek/tarhely/Kingston.jpg ",
        típus: "SSD",
        rpm: 500 + "MB/s",
        name: "Kingston A400 2.5",
        capacity: 480 + "GB",
        ár: 13600
    },
    {
        image: "kepek/tarhely/Samsung.jpg ",
        típus: "SSD",
        rpm: 560 + "MB/s",
        name: "Samsung 2.5 870 EVO",
        capacity: 1000 + "GB",
        ár: 37500
    },
    {
        image: "kepek/tarhely/KingstonM2.jpg ",
        típus: "SSD",
        rpm: 3500 + "MB/s",
        name: "Kingston NV2",
        capacity: 1000 + "GB",
        ár: 25600
    },
    {
        image: "kepek/tarhely/samsungm2.jpg ",
        típus: "SSD",
        rpm: 3500 + "MB/s",
        name: "Samsung 970 EVO Plus ",
        capacity: 1000 + "GB",
        ár: 37850
    }
];

const monitors = [
    {
        image: "kepek/monitor/AOC.png ",
        típus: "VA",
        name: "AOC AGON Q27G3XMN",
        refreshRate: 155 + "Hz",
        resolution: 1440 + "p",
        size: 27 + "col",
        ár: 185000
    },
    {
        image: "kepek/monitor/AOC 24G4XE.jpg ",
        típus: "IPS",
        name: "AOC 24G4XE",
        refreshRate: 180 + "Hz",
        resolution: 1080 + "p",
        size: 23.8 + "col",
        ár: 65000
    },
    {
        image: "kepek/monitor/Odessey G3.jpg ",
        típus: "VA",
        name: "Samsung Odyssey G3",
        refreshRate: 180 + "Hz",
        resolution: 1080 + "p",
        size: 24 + "col",
        ár: 55000
    },
    {
        image: "kepek/monitor/lG_Ultragear.jpg ",
        típus: "IPS",
        name: "LG UltraGear 27GR83Q-B",
        refreshRate: 240 + "Hz",
        resolution: 1440 + "p",
        size: 27 + "col",
        ár: 185000
    },
    {
        image: "kepek/monitor/ROG.jpg ",
        típus: "IPS",
        name: "ASUS ROG Swift PG27AQDM",
        refreshRate: 240 + "Hz",
        resolution: 1440 + "p",
        size: 26.5 + "col",
        ár: 355000
    }
];


const mice = [
    {
        image: "kepek/eger/G305.jpg ",
        típus: "Gaming",
        name: "Logitech G305",
        dpi:  "13000 DPI",
        wire: "Vezeték nélküli",
        ár: 19000
    },
    {
        image: "kepek/eger/Hama_Urage.jpg",
        típus: "Gaming",
        name: "Hama uRage Reaper",
        dpi:  "10000 DPI",
        wire: "Vezetékes",
        ár: 19000
    },
    {
        image: "kepek/eger/Viper.jpg ",
        típus: "Gaming",
        name: "Razer Viper V3 HyperSpeed",
        dpi:  "16000 DPI",
        wire: "Vezeték nélküli",
        ár: 33000
    },
    {
        image: "kepek/eger/GPRO.jpg ",
        típus: "Gaming",
        name: "Logitech G Pro Wireless",
        dpi:  "16000 DPI",
        wire: "Vezeték nélküli",
        ár: 48000
    },
    {
        image: "kepek/eger/ROG.jpg ",
        típus: "Gaming",
        name: "ASUS ROG Chakram X Origin ",
        dpi:  "36000 DPI",
        wire: "Vezeték nélküli",
        ár: 65000
    },
];


const keyboards = [
    {
        image: "kepek/billentyu/Hama.png",
        típus: "Membrános",
        name: "Hama uRage Lethality 2",
        size: 100 +"%",
        ár: 6200
    },
    {
        image: "kepek/billentyu/Shark.png",
        típus: "Mechanikus",
        name: "White Shark Commandos",
        size: 75 + "%",
        ár: 9690
    },
    {
        image: "kepek/billentyu/Logi.png",
        típus: "Mechanikus",
        name: "Logitech K835",
        size: 75 +"%",
        ár: 21950
    },
    {
        image: "kepek/billentyu/Razer.png",
        típus: "Mechanikus",
        name: "Razer BlackWidow V3 TKL",
        size: 80 +"%",
        ár: 41400
    },
    {
        image: "kepek/billentyu/Keychron2.jpg",
        típus: "Mechanikus",
        name: "Keychron Q10 RGB Knob USB",
        size:  90 +"%",
        ár: 70550
    },
]

function createCards(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const nameColor = item.name.toLowerCase().includes('nvidia') ? 'nvidia-green' : 
                         item.name.toLowerCase().includes('radeon') ? 'amd-red' : '';
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3 class="${nameColor}">${item.name}</h3>
            <div class="specs">
                ${Object.entries(item)
                    .filter(([key]) => key !== 'image' && key !== 'name')
                    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                    .join('')}
            </div>
            <div class="description" style="display: none;">
                ${getProductDescription(item)}
            </div>
            <button class="description-btn" onclick="toggleDescription(this)">Show Description</button>
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
            case 'cpu':                         // Fixed from 'kepek/cpu/'
                createCards(cpus, 'cpu-cards'); // Fixed from 'cpu'
                break;
            case 'ram':                         // Fixed from 'kepek/ram/'
                createCards(rams, 'ram-cards'); // Fixed from 'ram'
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

function createCards(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const nameColor = item.name.toLowerCase().includes('nvidia') ? 'nvidia-green' : 
                         item.name.toLowerCase().includes('radeon') ? 'amd-red' : '';
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3 class="${nameColor}">${item.name}</h3>
            <div class="specs">
                ${Object.entries(item)
                    .filter(([key]) => key !== 'image' && key !== 'name')
                    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                    .join('')}
            </div>
        `;
        
        card.onclick = () => selectForComparison(item, card);
        container.appendChild(card);
    });
}

function selectForComparison(item, card) {
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selectedItems = selectedItems.filter(selected => selected.name !== item.name);
    } else if (selectedItems.length < 2) {
        card.classList.add('selected');
        selectedItems.push(item);
    }
    
    if (selectedItems.length === 2) {
        showComparison();
    }
}
function extractNumber(value) {
    if (typeof value === 'string') {
        const match = value.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }
    return value;
}

function showComparison() {
    const resultContainer = document.getElementById('comparison-result');
    resultContainer.innerHTML = '';
    
    const table = document.createElement('table');
    table.className = 'comparison-table';
    
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Specification</th>
        <th>${selectedItems[0].name}</th>
        <th>${selectedItems[1].name}</th>
    `;
    table.appendChild(headerRow);
    
    let score1 = 0;
    let score2 = 0;
    
    Object.keys(selectedItems[0]).forEach(spec => {
        if (spec !== 'image' && spec !== 'name') {
            const row = document.createElement('tr');
            const value1 = selectedItems[0][spec];
            const value2 = selectedItems[1][spec];
            
            const num1 = extractNumber(value1);
            const num2 = extractNumber(value2);
            
            if (num1 && num2) {
                if (spec === 'price') {
                    if (num1 < num2) score1++;
                    else if (num2 < num1) score2++;
                } else {
                    if (num1 > num2) score1++;
                    else if (num2 > num1) score2++;
                }
            }
            
            row.innerHTML = `
                <td>${spec}</td>
                <td class="${num1 > num2 && spec !== 'price' || num1 < num2 && spec === 'price' ? 'better-value' : ''}">${value1}</td>
                <td class="${num2 > num1 && spec !== 'price' || num2 < num1 && spec === 'price' ? 'better-value' : ''}">${value2}</td>
            `;
            table.appendChild(row);
        }
    });
    
    resultContainer.appendChild(table);
    
    const winnerDiv = document.createElement('div');
    winnerDiv.className = 'winner-announcement';
    winnerDiv.textContent = `Összeségében a jobb választás: ${score1 >= score2 ? selectedItems[0].name : selectedItems[1].name}`;
    resultContainer.appendChild(winnerDiv);
}

function resetComparison() {
    // Clear selected items array
    selectedItems = [];
    
    // Remove selected class from all cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Clear comparison results
    document.getElementById('comparison-result').innerHTML = '';
}

function toggleDescription(button) {
    const description = button.previousElementSibling;
    const isHidden = description.style.display === 'none';
    description.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Leírás elrejtése' : 'Részletesebb leírás';
    event.stopPropagation(); // Prevents card selection when clicking the button
}

function getProductDescription(item) {
    // Add detailed descriptions based on product type
    const descriptions = {
        'NVIDIA GTX 1650': 'Entry-level gaming GPU perfect for esports titles and 1080p gaming. Features NVIDIA Turing architecture and efficient power consumption.',
        'NVIDIA RTX 4060': 'Mid-range powerhouse with ray tracing capabilities. Excellent 1080p and 1440p gaming performance with DLSS support.',
        'NVIDIA RTX 4070 Ti SUPER': 'High-end gaming GPU with exceptional 4K performance. Features advanced ray tracing and AI-powered DLSS 3.0.',
        'Radeon RX 6600 XT': 'Powerful mid-range GPU optimized for 1080p and 1440p gaming. Features AMD FidelityFX Super Resolution technology.',
        'Radeon RX 7800 XT': 'Premium gaming GPU delivering excellent 4K performance. Includes AMD FSR 3.0 and advanced ray tracing capabilities.'
        // Add more descriptions for other products
    };
    
    return descriptions[item.name] || 'Detailed description coming soon.';
}

window.addEventListener('load', showCards);