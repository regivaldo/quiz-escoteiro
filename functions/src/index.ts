import { onRequest } from "firebase-functions/v2/https";
import * as db from "./db.json";

// Endpoint que retorna todos os games
export const games = onRequest((request, response) => {
  response.json(db.games);
});

// Endpoint que retorna um game específico pelo slug
export const game = onRequest((request, response) => {
  // Pega o slug da query string
  const slug = request.query.slug as string;

  if (!slug) {
    response.status(400).json({ error: "Slug é obrigatório" });
    return;
  }

  const foundGame = db.games.find((g: { slug: string }) => g.slug === slug);

  if (!foundGame) {
    response.status(404).json({ error: "Game não encontrado" });
    return;
  }

  response.json(foundGame);
});
