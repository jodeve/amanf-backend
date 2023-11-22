import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { user } from "../../models";


async function login(req, res) {
    try {
        const {
            email,
            password,
        } = req.body;
        const _user = await user.findOne({
            where: {
                email,
            },
            attributes: {
                include: [
                    "password"
                ]
            }
        });        
        if (_user && await bcrypt.compare(password, _user.dataValues.password)) {
            const token = jwt.sign({ id: _user.dataValues.id }, process.env.TOKEN, { algorithm: "HS256" });
            res.setHeader("Authorization", `Bearer ${token}`);
            return res.send(_user);
        }
        return res.status(401)
            .json({

            });
    } catch (e) {
        console.log(e);
        return res.status(500)
            .json({

            });
    }
}

export default login;