import { Project, Task, List, Member, Team, User } from "entity";


 type EntityType = typeof Project | typeof Task | typeof List | typeof Member | typeof Team | typeof User;
 type EntityInstances = Project | Task | List | Member | Team | User;

export const Find = async <T extends EntityType>(Entity:T, id:number ) => {
  const instance = await Entity.findOne(id);

  if (!instance) {
    throw new Error("instance has not been found");
  }
  return instance;
};

export const Save = async <T extends EntityInstances>(instance:T):Promise<T> => {
  return instance.save();
};

export const Update = async <T extends EntityType>(instance:T, id:number, input):Promise<T> => {
  const Entity = Find(instance, id);

  Object.assign(Entity, input);

  return Save(Entity);
};

export const Delete = async <T extends EntityType>(Entity:T, id:number) => {

  const instance = Find(Entity, id);
  await instance.remove();
  return instance;
}
