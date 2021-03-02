import mock from "../mock"
let data = {
  usersList: [
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
}

// GET
mock.onGet("/api/users").reply(() => {
  return [200, data.usersList]
})
