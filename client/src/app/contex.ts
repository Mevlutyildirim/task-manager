import React from 'react';

interface iUser{
  id: string | null;
  setId: (id: string|null) => void;
}

export const UserContext = React.createContext<iUser>({id:null, setId:_id=>null});