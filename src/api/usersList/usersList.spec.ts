import axios from 'axios'
import { User, groupsRef } from '../../features/usersList/types';
import { getUsersList } from 'api'

jest.mock('axios');
// @see https://stackoverflow.com/a/53204714/9270352
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("check users list", () => {
  let mockUserslistData:User[] = []
  it("fetches users list", async () => {
    mockUserslistData = [
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
    mockedAxios.get.mockResolvedValue({
      data: mockUserslistData
    })
    const res = await getUsersList("/users")
    expect(typeof(res)).toEqual(typeof([]))
    expect(res).toEqual(mockUserslistData)
    expect(res).toHaveLength(2)
  });

  it("user groups array can be undefined or must be a subset of a reference array",  async () => {
    mockUserslistData = [
      {
        id: 1,
        name: 'Joe',
        status: true,
      },
      {
        id: 2,
        name: 'Tom',
        status: false,
        groups: ["marketing"]
      },
    ]
    mockUserslistData.find((u) => {
      if (u.groups) return expect(groupsRef).toEqual(expect.arrayContaining(u.groups))
      return expect(u.groups).toBeUndefined()
    })
  })
  it("user groups property does not exist in group reference",  async () => {
    const user:User = {
      id: 2,
      name: 'Tom',
      status: false,
      groups: ["sales"]
    }
    if (user.groups) {
      expect(groupsRef).not.toEqual(expect.arrayContaining(user.groups))
    }
  })
})