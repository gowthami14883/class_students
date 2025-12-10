function validationForm(req, res, success, data) {

    if (!req.body || req.body.text === undefined) {
        return res.status(400).json({ success: false, message: data });
    }
    if (typeof req.body.text !== "string") {
        return res.status(400).json({ success: false, message: "text must be a string" });
    }
    return { success: true };
}

module.exports = { validationForm };
