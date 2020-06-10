const fs =  require('fs')
const { join }  = require('path');

const filePath = join(__dirname, 'champions.json');

const getChampions = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

const saveChampion =  (champions) => fs.writeFileSync(filePath, JSON.stringify(champions, null, '\t')) 

const championRouter = (app) => {

    app.route('/champions/:id?')
        .get((req, res) => {
            const champions = getChampions()
            res.send({ champions })
        })
        .post((req, res) =>{
            const champions = getChampions()

            champions.push(req.body)
            saveChampion(champions)

            res.send(201).send("Campeao Cadastrado")
        })
        .put((req, res) => {
            const champions = getChampions()
            saveChampion(champions.map(champion => {
                if(champion.id === req.params.id) {
                    return {
                        ...champion,
                        ...req.body
                    }
                }

                return champion
            }))

            res.status(200).send("Campeao Atualizado")
        })
        .delete((req, res ) => {
            const champions = getChampions()
            saveChampion(champions.filter(
                champion => champion.id !== req.params.id))

                res.status(200).send('OK')
        })
}

module.exports = championRouter