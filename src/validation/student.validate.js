function validateStudent(req, res, next) {
    const { name, rollno, section, branch } = req.body;

    if (!/^[A-Za-z ]+$/.test(name)) {
        return res.status(400).json({ error: "Name entered is invalid" });
    }

    if (!rollno) {
        return res.status(400).json({ error: "Roll number is required" });
    }

    next();
}

module.exports = { validateStudent };
