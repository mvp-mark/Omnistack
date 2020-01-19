const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage} = require('../websocket');

// Index , show, store, update, destroy
//Index = mostrar lista do recurso
//show mostrar um unico recurso
//store criar recurso
//update alterar
//destroy deletar

module.exports = {
	async index(request, response) {
		const devs = await Dev
			.find
			//fazer filtros aqui dentro
			();
		return response.json(devs);
	},

	async store(request, response) {
		const { github_username, techs, latitude, longitude } = request.body;

		const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

		let dev = await Dev.findOne({ github_username });
		if (!dev) {
			const { name = login, avatar_url, bio } = apiResponse.data;

			const techsArray = parseStringAsArray(techs);

			const location = {
				type: 'Point',
				coordinates: [longitude, latitude],
			};

			dev = await Dev.create({
				github_username,
				name,
				avatar_url,
				bio,
				techs: techsArray,
				location,
			});

			//Filtrar as conexões que estão há no máximo 10km de distancia
			//e que i novo dev tenha pelo menos uma das tecnologias filtradas

			const sendSocketMessageTo = findConnections(
				{
					latitude,
					longitude,
				},
				techsArray
			);
                sendMessage(sendSocketMessageTo, 'new-dev', dev);
			console.log(sendSocketMessageTo);
		}

		return response.json(dev);
	},

	// exercicio para depois
	async update() {},
	async delete() {},
};
