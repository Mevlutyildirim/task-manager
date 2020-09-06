import { Project, Task, List, Member, Team, User } from "entity";

export const Find = async (Entity, id ) => {
  const instance = await Entity.findOne(id);

  if (!instance) {
    throw new Error("instance has not been found");
  }
  return instance;
};

export const Save = async (instance) => {
  return instance.save();
};

export const Update = async (instance, id, input) => {
  const Entity = Find(instance, id);

  Object.assign(Entity, input);

  return Save(Entity);
};

export const Delete = async (Entity, id) => {

  const instance = Find(Entity, id);
  await instance.remove();
  return instance;
}
