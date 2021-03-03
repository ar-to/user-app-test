import axios from 'axios'
// import { Todo } from 'features/todoList/types';
import { User } from 'features/usersList/types';

export async function getUsersList(url:string): Promise<User[]> {
  // consider DRY and encapsulating axios instance in a class that can be used once (singleton) 
    const response = await axios.get<User[]>(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    });

    return response.data;
}
