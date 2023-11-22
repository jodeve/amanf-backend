import sequelize from "sequelize";
import { user } from "../../models";
import bcrypt from "bcrypt";

async function index(_, res) {

    try {
        let data = await user.findAll({
            where: {
                role: {
                    [sequelize.Op.not]: "Super Admin"
                }
            }
        });
        return res.status(200)
            .json(data)
    } catch (e) {
        console.log(e);

    }

}

async function store(req, res) {

    try {

        if (req.body.role === "Super Admin") return res.status(500)
            .json({})

        let email = req.body.email;

        let _user = await user.findOne({
            where: {
                email,
            }
        });        

        if (_user) return res.status(422)
            .json({})

        let password = await bcrypt.hash(req.body.password, 10);

        let data = await user.create({
            ...req.body,
            password,
        });

        delete data.password;

        return res.status(201)
            .json(data)
    } catch (error) {
        console.log(error);

        return res.status(500)
            .json({})
    }
}

async function destroy(req, res) {

    const id = req.params.id;

    const data = await user.destroy({ where: { id } });
    return res
        .json(data)

}

async function update(req, res) {

    try {
        const id = req.params.id;

        let email = req.body.email;

        let _user = await user.findOne({
            where: {
                email,
            }
        });        

        // changing email to another user's
        if (_user && _user.dataValues.id != id) return res.status(422)
            .json({})

        _user = await user.findOne({
            where: {
                id
            }
        });

        if (!_user) return res.status(404).json({});

        _user.email = req.body.email;
        _user.name = req.body.name;

        let password = req.body.password;

        if (password) {
            password = await bcrypt.hash(password, 10);
            _user.password = password;
        }

        await _user.save();

        return res
            .json(_user)
    } catch (e) {
        console.log(e);
        return res.status(500).json({});
    }

}

export default {
    store,
    index,
    destroy,
    update,
}