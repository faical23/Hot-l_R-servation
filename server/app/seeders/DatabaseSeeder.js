const { connectDB } = require("../config/db");
const { Room, RoomType,Hotel } = require("../models");
const random = (max = 50) => {
    return Math.floor(Math.random() * max);
};
connectDB().then(() => {
    const hotelInformation = {
        "name": "Hotel",
        "images": [
            "storage/image1.jpg",
            "storage/image2.jpg",
            "storage/image3.jpg",
        ],
        "description": `
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ut ad iure pariatur at quae explicabo quibusdam debitis sit natus fugiat quia cumque facere, odio animi dignissimos alias possimus veniam doloribus nisi illo? Quisquam enim error porro, quaerat ab architecto?
        `,
        "localisation": `
            https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.3362669923235!2d-9.225810684370442!3d32.30281851531825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44aaad6fdd98ee66!2zMzLCsDE4JzEwLjEiTiA5wrAxMycyNS4wIlc!5e0!3m2!1sfr!2sma!4v1643313015472!5m2!1sfr!2sma
        `,
        "address":"address",
        "email":"hotel@mail.co",
        "phone":"+2123323131",
    };
    const hotel = new Hotel(hotelInformation);
    hotel.save();
    RoomType.insertMany([
        { name: 'Gourav',price:120 },
        { name: 'Kartik',price:120 },
        { name: 'Niharika',price:120 },
        { name: 'genji',price:120 },
        { name: 'fandi',price:120 },
        { name: 'mals',price:120 },
    ]).then(function (res) {
        // add ref room type to rooms
        const type_ids = res.map(item => item._id);
        for (i = 1; i <= 100; i++) {
            const room = new Room({
                ref: i,
                capacity: random(5),
                block: i >= 1 && i <= 20 && "A" || i >= 20 && i <= 40 && "B" || i >= 40 && i <= 60 && "C" || i >= 60 && i <= 80 && "D" || i >= 80 && i <= 100 && "E",
                type_id: type_ids[random(type_ids.length)]
            });
            room.save()
        }
        console.log("database seed successfuly!");
    }).catch(function (error) {
        console.log(error)      // Failure
    });
})
