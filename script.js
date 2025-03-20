// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    const gardeningButton = document.getElementById('gardeningButton');
    const outfitsButton = document.getElementById('outfitsButton');
    const friendsButton = document.getElementById('friendsButton');
    const objectsButton = document.getElementById('objectsButton');

    // Sections
    const gardeningSection = document.getElementById('gardeningSection');
    const outfitsSection = document.getElementById('outfitsSection');
    const friendsSection = document.getElementById('friendsSection');
    const objectsSection = document.getElementById('objectsSection');

    // Image containers
    const gardeningImages = document.getElementById('gardeningImages');
    const outfitImages = document.getElementById('outfitImages');
    const friendsImages = document.getElementById('friendsImages');
    const packagesImages = document.getElementById('packagesImages');

    // Array of images for each category (you can update this with the actual image paths)
    const gardeningImgs = ['assets/gardening/img1.jpg', 'assets/gardening/img2.jpg', 'assets/gardening/img3.jpg'];
    const outfitImgs = ['assets/outfits/outfit1.jpg', 'assets/outfits/outfit2.jpg', 'assets/outfits/outfit3.jpg'];
    const friendsImgs = ['assets/friends/friend1.jpg', 'assets/friends/friend2.jpg', 'assets/friends/friend3.jpg'];
    const packagesImgs = ['assets/objects/package1.jpg', 'assets/objects/package2.jpg', 'assets/objects/package3.jpg'];

    // Function to load images into a section
    function loadImages(imageArray, container) {
        container.innerHTML = ''; // Clear the container before adding new images
        imageArray.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            container.appendChild(img);
        });
    }

    // Event listeners for the buttons
    gardeningButton.addEventListener('click', () => {
        gardeningSection.style.display = 'block';
        outfitsSection.style.display = 'none';
        friendsSection.style.display = 'none';
        objectsSection.style.display = 'none';
        loadImages(gardeningImgs, gardeningImages);
    });

    outfitsButton.addEventListener('click', () => {
        outfitsSection.style.display = 'block';
        gardeningSection.style.display = 'none';
        friendsSection.style.display = 'none';
        objectsSection.style.display = 'none';
        loadImages(outfitImgs, outfitImages);
    });

    friendsButton.addEventListener('click', () => {
        friendsSection.style.display = 'block';
        gardeningSection.style.display = 'none';
        outfitsSection.style.display = 'none';
        objectsSection.style.display = 'none';
        loadImages(friendsImgs, friendsImages);
    });

    objectsButton.addEventListener('click', () => {
        objectsSection.style.display = 'block';
        gardeningSection.style.display = 'none';
        outfitsSection.style.display = 'none';
        friendsSection.style.display = 'none';
        loadImages(packagesImgs, packagesImages);
    });
});
