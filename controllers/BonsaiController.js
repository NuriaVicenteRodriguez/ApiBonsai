import BonsaiModel from "../models/BonsaiModel.js"

export const getAllBonsais = async (request, response) => {

    try {
        const bonsais =  await BonsaiModel.findAll();
        response.status(200).json(bonsais);
    }
    catch(error){
        response.json({message: error.message});
    }
}

export const deleteBonsai = async (request, response) => {

    try {
        const { id } =request.params;
        const bonsai = await BonsaiModel.destroy({ where: { id }});
        response.status(200).json(bonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const createBonsai = async (request, response) => {
    try {
        const newBonsai = await BonsaiModel.create(
            request.body
        );

        response.status(201).json(newBonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const updateBonsai = async (request, response) => {
    try {
        const { id } = request.params;

        const existingBonsai = await BonsaiModel.findByPk(id);
        if (!existingBonsai) {
            return response.status(404).json({ message: 'Bonsai not found' });
        }

        await BonsaiModel.update(
            request.body,
            { where: { id } }
        );


        const updatedBonsai = await BonsaiModel.findByPk(id);

        response.status(201).json({ message: 'Bonsai updated successfully', bonsai: updatedBonsai });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const getBonsaiById = async (request, response) => {
    try {
        const { id } = request.params;
        const bonsai = await BonsaiModel.findByPk(id);
        
        if (!bonsai) {
            return response.status(404).json({ message: 'Bonsai not found' });
        }
        
        response.status(200).json(bonsai);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
    }
}