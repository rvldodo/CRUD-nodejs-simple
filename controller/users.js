import { v4 as uuid } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  res.send(`user with name ${user.name} added successfully`);
};

export const getUser = (req, res) => {
  res.send(users);
};

export const userDetail = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (!user) return;
  res.send(user);
};

export const userDelete = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${req.params.id} removed successfully`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (name) user.name = name;

  if (email) user.email = email;

  if (age) user.age = age;

  res.send(`User with id ${req.params.id} updated`);
};
