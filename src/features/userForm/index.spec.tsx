// required
import React from 'react'
import { shallow, mount } from 'enzyme';
import UserForm from 'features/userForm'

// mock
import { mockUserslistData } from '@fake-db/UsersList'

describe('check user form conmpoent', () => {
  it('renders without crashing', () => {
    shallow(<UserForm />);
  });

  it('renders headers', () => {
    const wrapper = shallow(<UserForm />);
    const h1 = <h1>User Form</h1>;
    expect(wrapper.contains(h1)).toEqual(true);
  });
  it('renders label headers', () => {
    const wrapper = shallow(<UserForm />);
    const ID = <h5>ID</h5>;
    const Name = <h5>Name</h5>;
    const Status = <h5>Status</h5>;
    const Groups = <h5>Groups</h5>;
    const Features = <h5>Features</h5>;
    expect(wrapper.contains(ID)).toEqual(true);
    expect(wrapper.contains(Name)).toEqual(true);
    expect(wrapper.contains(Status)).toEqual(true);
    expect(wrapper.contains(Groups)).toEqual(true);
    expect(wrapper.contains(Features)).toEqual(true);
  });

  it("accepts user props", () => {
    const wrapper = mount(<UserForm user={mockUserslistData[0]} />);
    expect(wrapper.props().user).toEqual(mockUserslistData[0]);
    // check groups is optional to render
    expect(wrapper.props().user.groups).toEqual(mockUserslistData[0].groups);
    expect(wrapper.props().user.groups).toBeUndefined();
    expect(wrapper.props().user.features).toBeUndefined();
  });
  it("accepts user groups", () => {
    const mockUserslistData = [
      {
        id: 1,
        name: 'Joe',
        status: true,
        groups: ["marketing", "engineering"]
      },
    ]
    const wrapper = mount(<UserForm user={mockUserslistData[0]} />);
    const Groups = <h5>Groups</h5>;
    expect(wrapper.contains(Groups)).toEqual(true);
    expect(wrapper.props().user.groups).toEqual(mockUserslistData[0].groups);
    expect(wrapper.props().user.groups).not.toBeUndefined();
    // check groups are rendered as a string or list of checkboxes
    // this needs to be tested on the component 
    expect(JSON.stringify(wrapper.props().user.groups)).toEqual(JSON.stringify(mockUserslistData[0].groups))
  });
  it("accepts user features", () => {
    const mockUserslistData = [
      {
        id: 1,
        name: 'Joe',
        status: true,
        features: ["read-only-lists"]
      },
    ]
    const wrapper = mount(<UserForm user={mockUserslistData[0]} />);
    const Features = <h5>Features</h5>;
    expect(wrapper.contains(Features)).toEqual(true);
  })
});
