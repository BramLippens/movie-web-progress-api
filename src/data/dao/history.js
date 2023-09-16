const { db, tables } = require("../db-config");

const getAllHistory = async () => {
  const history = await db(tables.watch_history).select();
  res.json(history);
};

const getHistoryById = async (id) => {
  const { id } = req.params;
  const history = await db(tables.watch_history).where({ id }).first();
  res.json(history);
};

const addHistory = async (_history) => {
  const history = await db(tables.watch_history).insert(_history);
  res.json(history);
};

const updateHistory = async (id, _history) => {
  const { id } = req.params;
  const history = await db(tables.watch_history).where({ id }).update(_history);
  res.json(history);
};

const deleteHistory = async (id) => {
  const { id } = req.params;
  const history = await db(tables.watch_history).where({ id }).del();
  res.json(history);
};

module.exports = {
  getAllHistory,
  getHistoryById,
  addHistory,
  updateHistory,
  deleteHistory,
};
