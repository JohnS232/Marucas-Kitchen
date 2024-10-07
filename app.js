// Select DOM elements for the mobile menu and logo
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#logo');

// Function to display the mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Add event listener to toggle the mobile menu on click
menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#Home');
    const aboutMenu = document.querySelector('#About');
    const menuMenu = document.querySelector('#Menu');
    const contactMenu = document.querySelector('#Contact');
    const galleryMenu = document.querySelector('#Gallery'); 
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960) {
        if (scrollPos < 600) {
            homeMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            menuMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 600 && scrollPos < 1400) {
            aboutMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            menuMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 1400 && scrollPos < 2345) {
            menuMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 2345 && scrollPos < 3000) { 
            galleryMenu.classList.add('highlight');
            menuMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 3000) { 
            contactMenu.classList.add('highlight');
            galleryMenu.classList.remove('highlight');
            menuMenu.classList.remove('highlight');
        }
    }

    if (elem && (window.innerWidth < 960 || scrollPos < 600)) {
        elem.classList.remove('highlight');
    }
};

// Add event listeners for scroll and click to trigger highlightMenu
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a link
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

// Image arrays for each category
const galleryImages = {
    tacos: [
        { src: "images/Tacos1.jpg", name: "Tacos1" },
        { src: "images/Tacos2.jpg", name: "Tacos2" },
        { src: "images/Tacos3.jpg", name: "Tacos3" },
        { src: "images/Tacos4.jpg", name: "Tacos4" },
        { src: "images/Tacos5.jpg", name: "Tacos5" },
        { src: "images/Tacos6.jpg", name: "Tacos6" },
        { src: "images/Tacos7.jpg", name: "Tacos7" },
        { src: "images/Tacos8.jpg", name: "Tacos8" },
        { src: "images/Tacos9.jpg", name: "Tacos9" }
    ],
    burritos: [
        { src: "images/Burrito2.jpg", name: "Burrito2" }
    ],
    quesadillas: [
        { src: "images/Quesdilla1.jpg", name: "Quesadilla1" }
    ],
    desserts: [
        { src: "images/Desserts1.jpg", name: "Desserts1" },
        { src: "images/Desserts2.jpg", name: "Desserts2" },
        { src: "images/Desserts3.jpg", name: "Desserts3" },
        { src: "images/Desserts4.jpg", name: "Desserts4" },
        { src: "images/Desserts5.jpg", name: "Desserts5" },
        { src: "images/Desserts6.jpg", name: "Desserts6" }
    ],
    tortas: [
        { src: "images/Torta1.jpg", name: "Torta1" },
        { src: "images/Torta2.jpg", name: "Torta2" },
        { src: "images/Torta3.jpg", name: "Torta3" }
    ],
    drinks: [
        { src: "images/Drinks1.jpg", name: "Drinks1" },
        { src: "images/Drinks2.jpg", name: "Drinks2" }
    ],
    mainDishes: [
        { src: "images/Main1.jpg", name: "Main1" },
        { src: "images/Main2.jpg", name: "Main2" },
        { src: "images/Main3.jpg", name: "Main3" },
        { src: "images/Main4.jpg", name: "Main4" },
        { src: "images/Main5.jpg", name: "Main5" },
        { src: "images/Main6.jpg", name: "Main6" },
        { src: "images/Main7.jpg", name: "Main7" },
        { src: "images/Main8.jpg", name: "Main8" },
        { src: "images/Main9.jpg", name: "Main9" },
        { src: "images/Main10.jpg", name: "Main10" }
    ],
    catering: [
        { src: "images/Catering1.jpg", name: "Catering1" },
        { src: "images/Catering2.jpg", name: "Catering2" },
        { src: "images/Catering3.jpg", name: "Catering3" },
        { src: "images/Catering4.jpg", name: "Catering4" }
    ]
};

// Current image index trackers
let currentImageIndex = {
    tacos: 0,
    burritos: 0,
    quesadillas: 0,
    desserts: 0,
    tortas: 0,
    drinks: 0,
    mainDishes: 0,
    catering: 0
};

// Quicksort algorithm
function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quicksort(arr, low, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, high);
    }
    return arr;
}

// Partition function for Quicksort
function partition(arr, low, high) {
    let pivot = arr[high].name; // Use image name as the pivot
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j].name < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap with pivot
    return i + 1;
}

// Function to change the displayed image in a gallery
function changeImage(category, direction) {
    const gallery = galleryImages[category];

    // Sort the gallery images before displaying
    const sortedGallery = quicksort(gallery);

    // Update the index
    currentImageIndex[category] += direction;

    // Loop around if reaching the end or beginning of the gallery
    if (currentImageIndex[category] < 0) {
        currentImageIndex[category] = sortedGallery.length - 1;
    }
    if (currentImageIndex[category] >= sortedGallery.length) {
        currentImageIndex[category] = 0;
    }

    // Update the image in the gallery display
    const imgElement = document.getElementById(`${category}-image`);
    imgElement.src = sortedGallery[currentImageIndex[category]].src;
    imgElement.alt = sortedGallery[currentImageIndex[category]].name;
}

// Initialize the first image displays
function initGallery() {
    changeImage('tacos', 0);
    changeImage('burritos', 0);
    changeImage('quesadillas', 0);
    changeImage('desserts', 0);
    changeImage('tortas', 0);
    changeImage('drinks', 0);
    changeImage('mainDishes', 0);
    changeImage('catering', 0);
}

// Initialize the gallery display when the page loads
window.onload = initGallery;


// Add event listeners to hide mobile menu on link click or logo click
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// EmailJS form submission integration
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    emailjs.sendForm('service_ud7g4vt', 'template_qw69fcc', this)
        .then(function() {
            alert('SUCCESS! Your appointment request has been sent.');
        }, function(error) {
            alert('FAILED... Please try again.' + JSON.stringify(error));
        });
});

// Initialize Google Maps
function initMap() {
    var businessLocation = {lat: 42.1382114, lng: -83.4712585}; // Replace with the actual coordinates of your business
    
    // Map Options
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: businessLocation
    });
    
    // Marker for Business Location
    var marker = new google.maps.Marker({
        position: businessLocation,
        map: map
    });
}

// Calculate distance
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var address = document.getElementById('address').value;
    if (address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status === 'OK') {
                var userLocation = results[0].geometry.location;

                var service = new google.maps.DistanceMatrixService();
                service.getDistanceMatrix({
                    origins: [userLocation],
                    destinations: [businessLocation],
                    travelMode: 'DRIVING',
                }, function(response, status) {
                    if (status === 'OK') {
                        var distance = response.rows[0].elements[0].distance.text;
                        var duration = response.rows[0].elements[0].duration.text;

                        // Display the distance and duration
                        document.getElementById('distance').innerText = 'Distance: ' + distance;
                        document.getElementById('duration').innerText = 'Estimated Time: ' + duration;
                        document.getElementById('distance-result').style.display = 'block';
                    } else {
                        alert('Error calculating distance: ' + status);
                    }
                });
            } else {
                alert('Geocode was not successful: ' + status);
            }
        });
    } else {
        alert('Please enter your address.');
    }
});
