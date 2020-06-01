import React, { useEffect,useState } from 'react';
import {Button,Input,Select} from  'antd';
import 'antd/dist/antd.css';
import './App.scss';
const Search = Input.Search;
const Option=Select.Option;


function App(){
  const [state,setState]=useState(10);
  useEffect(()=>{
    
  },[]);
  
  return  <div>
  <h1>Hello world!</h1>
</div>

}

// class App extends React.Component{

//   state={
//     val:'',
//     list:[]
//   }
//   handleChange=(event)=>{
//     let val=event.target.value;
//     this.setState({val});
//   }

//   handleAdd=()=>{
//     let {val,list}=this.state;
//     list.push(val);
//     this.setState({val,list});
//   }

//   handleSearch=(val)=>{
//     let {list}=this.state;
//     list.push(val);
//     this.setState({list});
//   }

//   render(){


//       const {val,list}=this.state;
//       const options=[];
//       return <div className="container">
//         <h1>Hello world11!11</h1>
//         <Input type="text"  value={val} style={{width:300}} onChange={this.handleChange} />
//         <Button type="primary" onClick={this.handleAdd}>添加</Button>
//       <ul>
//         {
//           list.map((item,index)=>{
//             options.push(<Option key={index}  className="myselect">{item}</Option>)
//             return <li key={index}>{item}</li>
//           })
//         }
//       </ul>
//       <Search style={{width:300}} enterButton="添加" onSearch={this.handleSearch}>
      
//       </Search>  <br/>
//       <Select  onChange={this.handleSearch} style={{width:200}}>
//        {options}
//       </Select>

//       </div>


    
//   }
// }

function App1() {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
