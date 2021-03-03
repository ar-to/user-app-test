// required
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { shallow, mount, render } from 'enzyme';
import UserList from 'features/usersList';

// mock
import { mockUserslistData } from '@fake-db/UsersList';

describe('check users list conmponent', () => {
  it('renders without crashing', () => {
    // shallow(<UserList />);
    mount(
      <Provider store={store}>
        <UserList userList={mockUserslistData} />
      </Provider>
    );
  });

  it('renders header', () => {
    // const wrapper = shallow(<UserList />);
    const wrapper = mount(
      <Provider store={store}>
        <UserList userList={mockUserslistData} />
      </Provider>
    );
    const welcome = <h1>Users List</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  // error with getting props from the provider wrapper. 
  // it('accepts user list props', () => {
  //   const wrapper = mount(<UserList userList={mockUserslistData} />, {
  //     wrappingComponent: <Provider store={store}>,
  //   });
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <UserList userList={mockUserslistData} />
  //     </Provider>
  //   );
  //   // const wrapper = mount(<UserList userList={mockUserslistData} />);
  //   expect(wrapper.props().userList).toEqual(mockUserslistData);
  //   // check li renders from array
  // });
});
