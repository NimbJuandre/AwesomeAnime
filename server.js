import express from 'express';
import { ANIME } from '@consumet/extensions';
const app = express();
const port = process.env.PORT || 3001;

const gogoAnime = new ANIME.Gogoanime();

// CORS middleware to allow requests from your frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// API route to search for anime
app.get('/api/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required.' });
    }

    try {
        const results = await gogoAnime.search(query);
        res.json(results);
    } catch (error) {
        console.error('Error searching for anime:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API route to fetch anime information
app.get('/api/fetchAnimeInfo', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'AnimeID parameter is required.' });
    }

    try {
        const data = await gogoAnime.fetchAnimeInfo(query);
        res.json(data);
    } catch (error) {
        console.error('Error fetching anime information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API route to fetch anime episode sources
app.get('/api/fetchEpisodeSources', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Anime episode ID parameter is required.' });
    }

    try {
        const data = await gogoAnime.fetchEpisodeSources(query);
        res.json(data);
    } catch (error) {
        console.error('Error fetching anime information:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});