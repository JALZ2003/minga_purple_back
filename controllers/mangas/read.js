import Manga from '../../models/Manga.js';

export default (req, res) => {
    try {
        // const all = await Manga.find();
        const all = Manga.find();
        if (all) {
            return res.status(200).json({ success: true, message: 'mangas' });
        } else {
            return res.status(404).json({ success: false, message: 'mangas not found!' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error' });
    }
}