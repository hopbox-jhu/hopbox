import Deck from "../model/Host.js";

class DeckDAO {
    // return the created deck
    async createDeck({name}) {
      const deck = await Deck.create({name});
      return deck;
    }
  }
  
  export default DeckDAO;
