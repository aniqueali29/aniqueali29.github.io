// JSON-like data for products
const productData = {
    products: [
        {
            id: 1,
            name: 'Massage Chairs',
            price: '$229',
            description: 'Massage chairs offer a full-body relaxation experience, combining advanced technology with therapeutic techniques. They provide customizable massages, targeting areas like the back, neck, and legs, helping to relieve tension, improve circulation, and reduce stress for a rejuvenating experience.',
            image: '../assets/img/Products/Product-1 Massage Chairs.webp'
        },
        {
            id: 2,
            name: 'Massage Oils',
            price: '$249',
            description: 'Massage oils enhance the therapeutic effects of massage by moisturizing the skin and reducing friction. Infused with essential oils, they promote relaxation, ease muscle tension, and nourish the skin, creating a soothing and aromatic massage experience',
            image: '../assets/img/Products/Product-2 Massage Oils -1.jpg'
        },
        {
            id: 3,
            name: 'Aromatherapy Candles',
            price: '$999',
            description: 'Aromatherapy candles infuse the air with soothing scents, promoting relaxation and well-being. Made with essential oils, they create a calming ambiance, enhance mood, and relieve stress, making them perfect for massage sessions or simply unwinding at home.',
            image: '../assets/img/Products/Product-3 Aromatherapy Candles.webp'
        },
        {
            id: 4,
            name: 'Massage Tools',
            price: '$629',
            description: 'Massage tools are essential for targeted relief, helping to ease muscle tension and improve circulation. These tools, including rollers, massage balls, and gua sha stones, allow for precise, deep-tissue massage, enhancing relaxation and therapeutic benefits.',
            image: '../assets/img/Products/Product-4 Massage Tools.jpg'
        },
        {
            id: 5,
            name: 'Orthotic Devices',
            price: '$429',
            description: 'Orthotic devices are custom-made or pre-fabricated supports designed to improve foot function, alleviate pain, and correct alignment issues. They provide stability, enhance comfort, and prevent injury, making them essential for individuals with foot, ankle, or lower limb conditions.',
            image: '../assets/img/Products/Product-5 Orthotic Devices.webp'
        },
        {
            id: 6,
            name: 'Diffusers',
            price: '$299',
            description: 'Diffusers disperse essential oils into the air, creating a calming and aromatic environment. They promote relaxation, reduce stress, and enhance mood, making them ideal for use in therapy sessions or at home to improve overall well-being and ambiance.',
            image: '../assets/img/Products/Product-6 Diffusers.webp'
        },
        {
            id: 7,
            name: 'Lotions',
            price: '$399',
            description: 'Lotions hydrate and nourish the skin, leaving it soft and smooth. Infused with moisturizing ingredients and sometimes essential oils, they help protect the skins barrier, soothe dryness, and enhance the overall massage experience with added relaxation and comfort.',
            image: '../assets/img/Products/Product-7 Lotions and Creams1.jpg'
        },
        {
            id: 8,
            name: 'Chiropractic Pillows',
            price: '$629',
            description: 'Chiropractic pillows are ergonomically designed to support the natural alignment of the spine, reducing neck and back pain. They provide optimal comfort during sleep, promoting proper posture and alleviating pressure points, making them essential for those with chronic pain or posture issues.',
            image: '../assets/img/Products/Product-8 Chiropractic Pillows.webp'
        },
        {
            id: 9,
            name: 'Back Supports',
            price: '$929',
            description: 'Back supports provide stability and relief by promoting proper posture and reducing strain on the spine. Ideal for those with chronic back pain or during recovery, they help alleviate discomfort, improve alignment, and prevent further injury during daily activities.',
            image: '../assets/img/Products/Product-9 Back Supports.jpg'
        },
        {
            id: 10,
            name: 'Holistic Kits',
            price: '$499',
            description: 'Holistic kits are curated collections of natural wellness tools, such as essential oils, crystals, and herbal remedies. Designed to promote overall well-being, they support physical, emotional, and spiritual health, offering a comprehensive approach to self-care and balance.',
            image: '../assets/img/Products/Product-10 Holistic Kits.webp'
        },
        {
            id: 11,
            name: 'Herbal Supplements',
            price: '$199',
            description: 'Herbal supplements are natural products derived from plants, formulated to support various aspects of health. They can boost immunity, improve digestion, reduce stress, and enhance overall well-being, offering a holistic approach to maintaining balance and vitality in daily life.',
            image: '../assets/img/Products/Product-11 Herbal Supplements2.webp'
        },
        {
            id: 12,
            name: 'Wound Care Products',
            price: '$229',
            description: 'Wound care products are essential for treating and protecting injuries. They include bandages, antiseptics, and dressings that promote healing, prevent infection, and reduce pain. Designed for various wound types, they ensure a clean, safe environment for recovery.',
            image: '../assets/img/Products/Product-12 Wound Care Products.png'
        },
        {
            id: 13,
            name: 'Posture Cushions',
            price: '$329',
            description: 'Posture cushions are ergonomically designed to support proper spinal alignment while sitting. They alleviate pressure on the lower back, promote healthy posture, and reduce discomfort during prolonged sitting, making them ideal for improving comfort and preventing back pain.',
            image: '../assets/img/Products/Product-13 Posture Cushions.jpg'
        },
        {
            id: 14,
            name: 'Balance Boards',
            price: '$229',
            description: 'Balance boards are versatile tools that enhance stability, coordination, and core strength. By challenging your balance, they improve muscle control and posture, making them ideal for physical therapy, fitness training, or injury rehabilitation, promoting overall body strength and flexibility.',
            image: '../assets/img/Products/Product-14 Balance Boards.webp'
        },
        {
            id: 15,
            name: 'Yoga Mats and Props',
            price: '$699',
            description: 'Yoga mats and props provide essential support for a safe and effective practice. Mats offer a non-slip surface for stability, while props like blocks and straps assist in achieving proper alignment, deepening stretches, and enhancing flexibility, balance, and comfort.',
            image: '../assets/img/Products/Product-15 Yoga Mats and Props.webp'
        },
        {
            id: 16,
            name: 'Heat Therapy Pads',
            price: '$329',
            description: 'Heat therapy pads deliver soothing warmth to relieve muscle tension, pain, and stiffness. By increasing blood flow to the affected area, they promote healing and relaxation, making them ideal for managing chronic pain, sore muscles, or stress-related discomfort.',
            image: '../assets/img/Products/Product-16 Heat Therapy Pads1.jpg'
        },
        {
            id: 17,
            name: 'Exercise Equipment',
            price: '$829',
            description: 'Exercise equipment includes a variety of tools like weights, resistance bands, and cardio machines designed to improve strength, endurance, and flexibility. Suitable for all fitness levels, they support diverse workouts, from strength training to cardiovascular exercises, promoting overall health and fitness.',
            image: '../assets/img/Products/Product-17 Exercise Equipment.jpg'
        },
        {
            id: 18,
            name: 'Stimulation devices',
            price: '$849',
            description: 'Stimulation devices use electrical impulses to enhance muscle recovery, reduce pain, and improve circulation. They offer targeted therapy for conditions like muscle soreness or nerve pain, providing adjustable settings for personalized treatment and promoting overall wellness and healing.',
            image: '../assets/img/Products/Product-18 electrical stimulation devices.webp'
        },
        {
            id: 19,
            name: 'Splints',
            price: '$199',
            description: 'Splints immobilize and support injured or weakened body parts, aiding in healing and preventing further injury. Designed for various conditions, they stabilize joints and bones, reduce pain, and promote proper alignment, making them essential for effective recovery and rehabilitation.',
            image: '../assets/img/Products/Product-19 splints.jpg'
        },
        {
            id: 20,
            name: 'Grip strengtheners',
            price: '$329',
            description: 'Grip strengtheners are tools designed to enhance hand and forearm strength by providing resistance during squeezing exercises. They improve overall grip strength, endurance, and dexterity, making them ideal for athletes, rehabilitation, or daily activities that require enhanced hand functionality.',
            image: '../assets/img/Products/Product-20 grip strengtheners.webp'
        },
        {
            id: 21,
            name: 'shower chairs',
            price: '$529',
            description: 'Shower chairs provide stability and safety during bathing, offering a comfortable and secure seating option. Designed for individuals with mobility issues, they prevent slips and falls, allowing users to bathe independently while ensuring ease of access and enhanced comfort.',
            image: '../assets/img/Products/Product-21 shower chairs.jpg'
        },
        {
            id: 22,
            name: 'Hand exercisers',
            price: '$499',
            description: 'Hand exercisers are compact tools designed to strengthen and rehabilitate hand muscles. They improve grip strength, dexterity, and endurance through resistance-based exercises, making them ideal for enhancing hand functionality, aiding recovery, and supporting overall hand health and performance.',
            image: '../assets/img/Products/Product-22 Hand exercisers.jpg'
        },
        {
            id: 23,
            name: 'therapy balls',
            price: '$99',
            description: 'Therapy balls are versatile tools used for improving strength, flexibility, and balance. They assist in exercises that enhance core stability, relieve muscle tension, and support rehabilitation efforts, making them valuable for physical therapy, fitness routines, and overall body conditioning.',
            image: '../assets/img/Products/Product-23 therapy balls1.webp'
        },
        {
            id: 24,
            name: 'pegboards',
            price: '$629',
            description: 'Pegboards are versatile tools with a grid of holes used for organizing and displaying tools, equipment, or accessories. They provide customizable storage solutions, improving workspace efficiency and accessibility while helping to keep items neatly arranged and easily reachable.',
            image: '../assets/img/Products/Product-24 pegboards.jpg'
        },
        {
            id: 25,
            name: 'adjustable chairs',
            price: '$229',
            description: 'Adjustable chairs offer customizable comfort with features like height, tilt, and lumbar support adjustments. Designed to fit various body types and work environments, they enhance ergonomic support, reduce strain, and promote better posture for improved comfort and productivity.',
            image: '../assets/img/Products/Product-25 adjustable chairs.jpg'
        },
        {
            id: 26,
            name: 'protein powders',
            price: '$339',
            description: 'Protein powders are nutritional supplements that provide a concentrated source of protein to support muscle growth, repair, and overall health. Available in various flavors and types, they are ideal for athletes, fitness enthusiasts, and those seeking to boost their protein intake.',
            image: '../assets/img/Products/Product-26 protein powders.webp'
        },
        {
            id: 27,
            name: 'calming lotions',
            price: '$499',
            description: 'Calming lotions soothe and hydrate the skin with gentle, relaxing ingredients. Formulated to reduce irritation and redness, they provide a calming effect while nourishing and protecting the skin, making them ideal for sensitive skin or post-massage relaxation.',
            image: '../assets/img/Products/Product-27 calming lotions.webp'
        },
        {
            id: 28,
            name: 'fidget toys',
            price: '$629',
            description: 'Fidget toys are small, handheld objects designed to engage and occupy the hands, helping to reduce stress and improve focus. They come in various forms, such as spinners and cubes, providing sensory stimulation and promoting relaxation through repetitive motion.',
            image: '../assets/img/Products/Product-28 fidget toys.jpg'
        },
        {
            id: 29,
            name: 'Hot Stone Kits',
            price: '$129',
            description: 'Hot stone kits include smooth, heated stones used for therapeutic massage. They provide deep, soothing warmth to relax muscles, improve circulation, and alleviate tension. Often paired with massage oil, these kits enhance relaxation and promote overall well-being during treatments.',
            image: '../assets/img/Products/Product-29 hot stone kits.jpg'
        },
        {
            id: 30,
            name: 'Percussion Massagers',
            price: '$929',
            description: 'Percussion massagers are handheld devices that deliver rapid, concentrated pulses of pressure into muscle tissue. They help alleviate soreness, improve flexibility, and enhance muscle recovery by promoting blood flow and reducing tension. Ideal for athletes and post-exercise relaxation.',
            image: '../assets/img/Products/Product-30 Percussion massagers.webp'
        },
        {
            id: 31,
            name: 'Massage Sticks',
            price: '$849',
            description: 'Massage sticks are handheld tools designed for targeted muscle relief. They feature a firm, cylindrical shape with rotating segments, allowing users to roll and apply pressure to sore or tight muscles. Ideal for improving circulation, reducing stiffness, and enhancing recovery.',
            image: '../assets/img/Products/Product-31 massage sticks.webp'
        },
        {
            id: 32,
            name: 'Foam rollers',
            price: '$269',
            description: 'Foam rollers are cylindrical tools used for self-massage and muscle recovery. They help relieve muscle tightness, improve flexibility, and enhance blood circulation. Ideal for pre- and post-workout routines, they are essential for reducing soreness and promoting relaxation.',
            image: '../assets/img/Products/Product-32 Foam rollers.webp'
        }
    ]
};
// Function to open the popup
function openPopup(productId) {
    const product = productData.products.find(p => p.id === productId);

    if (product) {
        // Populate and display the popup
        document.getElementById('popup-image').src = product.image;
        document.getElementById('popup-title').innerText = product.name;
        document.getElementById('popup-price').innerText = product.price;
        document.getElementById('popup-description').innerText = product.description;
        
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        setTimeout(() => {
            popup.classList.add('show'); // Add show class after display to trigger transition
        }, 10); // Short delay to ensure transition works
    }
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none'; // Hide popup after transition ends
    }, 300); // Match this duration with the CSS transition time
}

// Add click event listeners to CartBtn buttons
document.querySelectorAll('.popupBtn').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-product-id'), 10);
        openPopup(productId);
    });
});

// Close button functionality
document.querySelector('.close').addEventListener('click', closePopup);
