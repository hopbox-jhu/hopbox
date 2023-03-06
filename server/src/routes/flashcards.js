import express from "express";
import DeckDAO from "../data/HostDAO.js";

const router = express.Router();
export const deckDao = new DeckDAO();

router.get("/decks", async (req, res) => {
  try {
    const { name } = req.query;
    const decks = await deckDao.readAllDeck({ name });
    res.json({
      status: 200,
      message: `Successfully retrieved ${decks.length} decks!`,
      data: decks,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/decks/:id/flashcards", async (req, res) => {
  try {
    const { id } = req.params;
    const flashcards = await deckDao.readAllCard({ id });
    res.json({
      status: 200,
      message: `Successfully retrieved ${flashcards.length} flashcards!`,
      data: flashcards,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/decks/:id", async (req, res) => {
  const { id } = req.params;
  const deck = await deckDao.readDeck(id);
  res.json({
    status: 200,
    message: `Successfully retrieved the following deck!`,
    data: deck,
  });
});

router.get("/decks/:deckid/flashcards/:cardid", async (req, res) => {
  const { deckid, cardid } = req.params;
  const card = await deckDao.readCard(deckid, cardid);
  res.json({
    status: 200,
    message: `Successfully retrieved the following deck!`,
    data: card,
  });
});

router.post("/decks", async (req, res) => {
  const { name } = req.body;
  const deck = await deckDao.createDeck({ name });
  res.status(201).json({
    status: 201,
    message: `Successfully created the following deck!`,
    data: deck,
  });
});

router.post("/decks/:id/flashcards", async (req, res) => {
  const { id } = req.params;
  const { front, back } = req.body;
  const deck = await deckDao.createCard({ id, front, back });
  res.status(201).json({
    status: 201,
    message: `Successfully added card to the following deck!`,
    data: deck,
  });
});

router.put("/decks/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const deck = await deckDao.updateDeck({ id, name });
  res.json({
    status: 200,
    message: `Successfully updated the following deck!`,
    data: deck,
  });
});

router.put("/decks/:deckid/flashcards/:cardid", async (req, res) => {
  const { deckid, cardid } = req.params;
  const { front, back } = req.body;
  const deck = await deckDao.updateCard({ deckid, cardid, front, back });
  res.json({
    status: 200,
    message: `Successfully updated the following flashcard!`,
    data: deck,
  });
});

router.delete("/decks/:id", async (req, res) => {
  const { id } = req.params;
  const deck = await deckDao.deleteDeck(id);
  res.json({
    status: 200,
    message: `Successfully deleted the following deck!`,
    data: deck,
  });
});

router.delete("/decks/:deckid/flashcards/:cardid", async (req, res) => {
  const { deckid, cardid } = req.params;
  const flashcard = await deckDao.deleteCard(deckid, cardid);
  res.json({
    status: 200,
    message: `Successfully deleted the following card!`,
    data: flashcard,
  });
});

export default router;
