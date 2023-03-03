import mongoose from "mongoose";

const DeckSchema = new mongoose.Schema({
    name: { type: String },
    cards: [{front: String, back: String}],
});

const Deck = mongoose.model('Deck', DeckSchema);

export default Deck;