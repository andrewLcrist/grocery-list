import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {
it('renders the name of the grocery in <h3> tags', () =>
{
  const wrapper = shallow(<Grocery name="Bananas" />);
  const title = <h3>Bananas</h3>;

  expect(wrapper.contains(title)).toEqual(true);
});

it('has a class of .Grocery', () => {
  const wrapper = shallow(<Grocery name="Bananas" />);

  expect(wrapper.is('.Grocery')).toEqual(true);
});

it('should have a className of "starred" if is starred', () => {
  const wrapper = shallow(<Grocery name="Bananas" starred={true} />
);

expect(wrapper.is('.starred')).toEqual(true);
});

it('should not have a className of "starred" if it is not starred', () => {
  const wrapper = shallow(<Grocery name="Bananas" starred={false} />);

  expect(wrapper.is('.starred')).toEqual(false);
});

it('should have a className of "purchased" if it is purchased', () => {
  const wrapper = shallow(<Grocery name="Bananas" purchased={true} />);

  expect(wrapper.is('.purchased')).toEqual(true);
});

it('should not have a className of "purchased" if it is not purchased', () => {
  const wrapper = shallow(<Grocery name="Bananas" purchased={false} />);

  expect(wrapper.is('.purchased')).toEqual(false);
});

it('should have a p.Grocery-quantity element if a quantity is passed as a prop', () => {
  const wrapper = shallow(
    <Grocery name="Bananas" quantity={'17 bunches'} />
  );

  expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
});

it('should not have a p.Grocery-quantity element if a quantity is not passed as a prop', () => {
  const wrapper = shallow(<Grocery name="Bananas" quantity={undefined}/>
)

  expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
});

// it('should reflect the right quanitiy of items', () => {
//   const wrapper = shallow(<Grocery name="Bananas" quanitity={'17 bunches'} />
// );
//
//   expect(wrapper.find('Grocery-quantity').text).toEqual('17 bunches')
// })

it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
  const wrapper = shallow(<Grocery name="Bananas" notes={'Lorem ipsum…'} />
);

  expect(wrapper.find('.Grocery-notes').length).toEqual(1);
});

it('should not have a className of "purchased" if it is not purchased', () => {
  const wrapper = shallow(<Grocery name="Bananas" notes={undefined} />
);

  expect(wrapper.find('.Grocery-notes').length).toEqual(0)
});

describe('.Grocery-purchase button', () => {

  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchased is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });

  it('should call onPurchase when click', () => {
    const onPurchaseMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onPurchase={onPurchaseMock}
      />
    );

    wrapper.find('.Grocery-purchase').simulate('click');

    expect(onPurchaseMock).toBeCalled();
  })

});

describe('.Grocery-star button', () => {

  it('should have a text of "Star" if starred is false', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={false} />
  );

  expect(wrapper.find('.Grocery-star').text()).toEqual('Star');
});

it('should have a text of "Unstar" if starred is true', () => {
  const wrapper = shallow(<Grocery name="Bananas" starred={true} />
  );

  expect(wrapper.find('.Grocery-star').text()).toEqual('Unstar')
});

it('should call onStar when click', () => {
  const onStarMock = jest.fn();

  const wrapper = mount(
    <Grocery
      name="Bananas"
      purchased={true}
      onStar={onStarMock}
    />
  );

  wrapper.find('.Grocery-star').simulate('click');

  expect(onStarMock).toBeCalled();
})

});

});
