// must import to initiate the mock api server
import "@fake-db"
import { User } from 'features/usersList/types';
import { getUsersList } from 'api/usersList'

it("test axios mock api",  async () => {
  let mockUserslistData:User[] = [
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
  const res = await getUsersList("/api/users")
  expect(typeof(res)).toEqual(typeof([]))
  expect(res).toEqual(mockUserslistData)
})