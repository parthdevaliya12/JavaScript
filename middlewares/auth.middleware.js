// import jwt from "jsonwebtoken"

// export const auth = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split("")[1]

//         if (!token) {
//             return res.status(400).json({ message: "Token not provided", success: false })
//         }

//         const verify = jwt.verify(token, process.env.JWT_SECRET)

//         req.user = verify;

//         next()

//     } catch (error) {
//         return res.status(401).json({ message: "Token invalid", success: false })
//     }
// }


import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token not provided",
                success: false
            });
        }

        const token = authHeader.split(" ")[1];

        const verify = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = verify.id;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token invalid or expired",
            success: false
        });
    }
};
