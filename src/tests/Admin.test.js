import React from "react";
import 'enzyme-adapter-react-15';
import 'enzyme-adapter-react-16';
import {mount, shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from "react-test-renderer";
import CarIT from "./components/CarIT";
import Admin from './pages/Admin';
import App from './App'
import Cars from './components/Cars'

configure({adapter: new Adapter()})


it("render correctly Admin Component", () => {
    const AdminComponent = renderer.create(<App><Admin/></App>).toJSON();
    expect(AdminComponent).toMatchSnapshot();
});//对模块进行检查，检查其是否是否有错误。

describe('render correctly CarIT Component', () => {
    it('component should render correct CarIT', () => {
        const wrapper = shallow(<CarIT item={{
            _id: '5cadcc89682cc43784094fc9',
            make: 'Nissan',
            rego: 'XYZ750',
            model: 'Pulsar',
            year: '2011',
            body: 'sedan',
            transmission: 'Auto',
            address: '103 Spring St , Melbourne , AU',
            price: 27,
            availability: true,
            damaged: true,
            lat: -37.8119,
            lng: 144.973,
        }}/>);
        expect(wrapper.find('.make').text()).toEqual('Nissan');//插入值对不对
        expect(wrapper.find('.rego').text()).toEqual('XYZ750');
    })
})//插入值对不对


let wrap;
let props = {
    item: {
        _id: '5cadcc89682cc43784094fc9',
        make: 'Nissan',
        rego: 'XYZ750',
        model: 'Pulsar',
        year: '2011',
        body: 'sedan',
        transmission: 'Auto',
        address: '103 Spring St , Melbourne , AU',
        price: 27,
        availability: true,
        damaged: true,
        lat: -37.8119,
        lng: 144.973,
    },
}
let wrapper;
describe('render correctly CarIT Function', () => {
    beforeEach(()=>{
        wrapper = shallow(<CarIT {...props}/>)
    })
    it('match',()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it('component should render correct CarIT Function', () => {
        wrapper.find('span').simulate('click');
        expect(wrapper.state('isDeleted')).toEqual(true)//state状态
    })
})//点击事件触发





