import express from 'express';
import {Project} from 'controllers';

export const PublicRoutes= (app:any):void => {

}

export const PrivateRoutes = (app:any):void=>{

  app.get('/project/:id', Project.getProject);
  app.put('/project/:id', Project.updateProject);
  app.post('/project/', Project.AddProject);
  app.delete('/project/', Project.deleteProject);

}
