//checks if id is a number else returns error
const mustBeInteger = (req, res, next) => {
    const id = req.params.id;

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' });
    } else {
        next()
    }
};

// checks if input fields are valid else returns error
const checkFieldsPost = (req, res, next) => {
    const { title, content, tags } = req.body;

    if (title && content && tags) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good'})
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsPost
};