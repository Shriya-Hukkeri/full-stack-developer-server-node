// import posts from "./tuits.js";
// let tuits = posts;

import tuitsDao from "../controllers/tuits-dao.js";


const tuitsController = (app) => {
	app.post('/api/tuits', createTuit);
	app.get('/api/tuits', findAllTuits);
	app.put('/api/tuits/:tid', updateTuit);
	app.delete('/api/tuits/:tid', deleteTuit);
}
//findAllTuits for a8
// const findAllTuits = (req, res) => {
// 	res.json(tuits);
// }


// findAllTuits for a9
const findAllTuits = async (req, res) => {
	const tuits = await tuitsDao.findAllTuits()
	res.json(tuits);
}


//createTuit for a8
// const createTuit = (req, res) => {
// 	const newTuit = req.body;
// 	newTuit._id = (new Date()).getTime()+'';
// 	newTuit.likes = 0;
// 	tuits.push(newTuit);
// 	res.json(newTuit);
// }


//createTuit for a9
const createTuit = async (req, res) => {
	const newTuit = req.body;
	const insertedTuit = await tuitsDao.createTuit(newTuit);
	res.json(insertedTuit);
}

//deleteTuit for a8
// const deleteTuit = (req, res) => {
// 	const tuitdIdToDelete = req.params.tid;
// 	tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
// 	res.sendStatus(200);
//
// }


//deleteTuit for a9
const deleteTuit = async (req, res) => {
	const tuitdIdToDelete = req.params.tid;
	const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
	res.send(status);
}


//updateTuit for a8
// const updateTuit = (req, res) => {
// 	const tuitdIdToUpdate = req.params.tid;
// 	const updatedTuit = req.body;
// 	tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
// 	res.sendStatus(200);
// }

//updateTuit for a9
const updateTuit = async (req, res) => {
	const tuitdIdToUpdate = req.params.tid;
	const updatedTuit = req.body;
	const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
	res.send(status);
}



export default tuitsController;