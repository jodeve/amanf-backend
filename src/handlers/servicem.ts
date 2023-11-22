import { servicem } from "../../models";


async function index(_, res) {

    try {
        let data = await servicem.findAll();
        return res.status(200)
            .json(data)
    } catch (e) {
        console.log(e);

    }

}

async function store(req, res) {

    let {
        name,
        image,
        description,
    } = req.body;

    try {


        let data = await servicem.create({
            name,
            image,
            description,
        });
        return res.status(201)
            .json(data)
    } catch (error) {
        console.log(error);

        return res.status(500)
            .json({})
    }
}

async function update(req, res) {

    let {
        name,
        image,
        description,
    } = req.body;

    try {

        const id = req.params.id;

        let data = await servicem.update({
            name,
            image,
            description,
        }, {
            where: {
                id
            }
        });
        if (data[0] === 0) {
            return res.status(404)
                .json({})
        }
        let _servicem = await servicem.findByPk(id);
        return res.json(_servicem)
    } catch (error) {
        console.log(error);

        return res.status(500)
            .json({})
    }
}

async function destroy(req, res) {

    const id = req.params.id;

    const data = await servicem.destroy({ where: { id } });;
    return res
        .json(data)

}

export default {
    index,
    store,
    destroy,
    update,
}