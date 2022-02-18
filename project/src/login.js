import React, {useState} from 'react';

const login = React.createContext({user: 'Johnny', setUser:(u)=>{}});

export function useStorageState(name, key) {
    let [data, setData] = useState(name);
  
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key,data);
      setData(data);
    }
    else{
      data=localStorage.getItem(key);
    } 
    const update = (newData) => {
      localStorage.setItem(key, newData);
      setData(newData);
    }
  
    return [data, update];
  }

export { login };
