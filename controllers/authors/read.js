import Author from "../../models/Author.js";
export default (req, res) => {
    try {
        // const all = await Author.find();
        const all = Author.find();
        if (all) {
            return res.status(200).json({ success: true, message: 'authors' });
        } else {
            return res.status(404).json({ success: false, message: 'authors not found!' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error' });
    }
}