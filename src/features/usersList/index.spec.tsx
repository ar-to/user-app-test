// required
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import UserList from 'features/usersList';

// mock
import { mockUserslistData } from '@fake-db/UsersList';

let wrapper:any;
describe('check users list conmponent', () => {
  beforeEach(() => {
    const mountWithProvider = (children: any) => (storez = store) => {
      return mount(<Provider store={storez}>{children}</Provider>);
    };
    const props = {};
    wrapper = mountWithProvider(<UserList {...props} />)();
  });

  it('renders without crashing', () => {
    // shallow(<UserList />);
    mount(
      <Provider store={store}>
        <UserList usersList={mockUserslistData} />
      </Provider>
    );
  });

  it('renders header', () => {
    // const wrapper = shallow(<UserList />);
    const wrapper = mount(
      <Provider store={store}>
        <UserList usersList={mockUserslistData} />
      </Provider>
    );
    const welcome = <h3>Users List</h3>;
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

  // snapshot test
  /**
   * NOTE: TEST PASSES but there is an error for a missing key on the props but could not find why this was happeing.
   * "Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information."
   * only saw one issue online but nothing useful https://github.com/facebook/react/issues/17431
   */
  // it('snapshot passes', () => {
  //   const tree = renderer.create(wrapper.setProps({ usersList: mockUserslistData })).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
