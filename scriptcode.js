document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code if needed
});
document.addEventListener('DOMContentLoaded', function() {
    const watches = [
        { name: "Rolex", price: "$5000", imageUrl: "path/to/rolex.jpg" },

        { name: "Omega", price: "$3000", imageUrl: "path/to/omega.jpg" },
        { name: "Tag Heuer", price: "$2000", imageUrl: "path/to/tagheuer.jpg" },
        // Add more watch brands and their details here var img = document.createElement('img');

        // // Set the source attribute to the URL of the image
        // img.src = './; // Replace '
        // path / to / your / image.jpg ' with the actual path to your image

        // // You can also set other attributes if needed, e.g., alt text, width, height, etc.
        // img.alt = 'Description of the image'; // Optional: alt text for accessibility

        // // Attach the image element to a container in the document
        // var container = document.getElementById('image-container');
        // container.appendChild(img);
    ];

    const container = document.getElementById('watch-container');

    watches.forEach(watch => {
        const card = document.createElement('div');
        card.className = 'watch-card';

        const image = document.createElement('img');
        image.src = watch.imageUrl;
        image.alt = watch.name;
        image.className = 'watch-image';

        const name = document.createElement('h3');
        name.className = 'watch-name';
        name.textContent = watch.name;

        const price = document.createElement('p');
        price.className = 'watch-price';
        price.textContent = watch.price;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);

        container.appendChild(card);
    });
});