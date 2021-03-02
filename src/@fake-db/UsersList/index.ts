import mock from "../mock"
import { User } from 'features/usersList/types';

export let mockUserslistData:User[] = [
  {
    id: 1,
    name: 'Joe',
    status: true,
  },
  {
    id: 2,
    name: 'Tom',
    status: false,
  }
]

// GET
mock.onGet("/api/users").reply(() => {
  return [200, mockUserslistData]
})
