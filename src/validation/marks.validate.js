function validateMarks(req, res, next) {
    const { sub1, sub2, sub3, sub4, sub5, sub6 } = req.body;

    const subjects = [sub1, sub2, sub3, sub4, sub5, sub6];

    for (let m of subjects) {
        if (isNaN(m) || m < 0 || m > 100) {
            return res.status(400).json({
                error: "Invalid mark entered (marks must be a number 0-100)"
            });
        }
    }

    next();
}
module.exports = { validateMarks };