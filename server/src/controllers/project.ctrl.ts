import {Project} from 'entity';
import * as Database from 'utils/database';
import  { AsyncError } from 'errors';


export const getProject = AsyncError(async (req,res)=>{
  const project = await Database.Find(Project, req.body.id)
  res.status(200).send({project});
})

export const updateProject = AsyncError(async (req, res)=>{
  const Update = req.body.update;
  const newProject = await Database.Update(Project, req.body.project.id, Update);
  res.status(200).send({newProject});
})

export const deleteProject = AsyncError(async (req, res)=>{
  const deletedProject = await Database.Delete(Project, req.body.project.id);
  res.status(200).send({deletedProject});
})

export const AddProject = AsyncError(async (req,res)=>{
  const project = new Project();
  Object.assign(project, req.body.project);
  const savedProject = await Database.Save(project);
  res.status(200).send({savedProject});
})
