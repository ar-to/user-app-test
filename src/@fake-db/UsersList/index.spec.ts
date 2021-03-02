// must import to initiate the mock api server
import "@fake-db"
import { getUsersList } from 'api/usersList'
import { mockUserslistData } from '@fake-db/UsersList'

it("test axios mock api",  async () => {
  const res = await getUsersList("/api/users")
  expect(typeof(res)).toEqual(typeof([]))
  expect(res).toEqual(mockUserslistData)
})