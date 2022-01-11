import Character from '../models/character.model.js'

class charactersService {
    async getCharacterById(id) {
        return await Character.findByPk(id)
    }

    async createCharacter(object) {
        const newCharacter = Character.build(object)
        return await newCharacter.save()
    }

    async editCharacterById(id, object) {
        const editedCharacter = await Character.findByPk(id)
        editedCharacter.set(object)
        return await editedCharacter.save()
    }

    async deleteCharacterById(id) {
        try {
            const deletedCharacter = await Character.findByPk(id)
            await deletedCharacter.destroy()
            return true
        } catch {
            return false
        }
    }
}

export default charactersService
