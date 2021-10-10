import React from 'react';
export default class Event extends React.Component {
  parent = React.createRef();
  child = React.createRef();
  componentDidMount() {
    this.parent.current.addEventListener('click', (e)=> {
      console.log('父元素原生捕获');
    }, true)
    this.parent.current.addEventListener('click', (e)=> {
      console.log('父元素原生冒泡');
    })
    this.child.current.addEventListener('click', (e)=> {
      console.log('子元素原生捕获');
    }, true)
    this.child.current.addEventListener('click', (e)=> {
      console.log('子元素原生冒泡');
    })
  }
  render() {
    return (
      <div ref={this.parent} onClickCapture={()=>{console.log('父元素React捕获')}}   onClick={()=>{console.log('父元素React冒泡')}}>
        <div ref={this.child} onClickCapture={()=>{console.log('子元素React捕获')}}   onClick={()=>{console.log('子元素React冒泡')}}> 123456</div>
      </div >
    )
  }
};
