import Author from "../../models/Author.js";   
export default async (req, res) => {
    try {
        const data = req.body;
        const one = Author.create(data)
        if (one) {
            return res.status(200).json({ response: one, message: 'created!' });
        } else {
            return res.status(500).json({ response: null, message: 'not created' });
        }
    } catch (error) {
        return res.status(500).json({ response: null, message: 'not created' });
    }
}