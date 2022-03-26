import React, { Component } from "react";

export default class MainContent extends Component{
  state={
    pageTitle:"Customers",
    customerCount:5,
    customers:[
      {id:1, name: "Scott",
      phone:"123-456",
      address:{city:"New Delhi",
      photo:"https://picsum.photos/id/1010/60"
    }},
      {id:2, name: "Jones",
      phone:"123-457",
      address:{city:"London",
      photo:"https://picsum.photos/id/1011/60"
    }},
      {id:3, name: "Allen",
      phone:null,
      address:{city:"New Jersey",
      photo:"https://picsum.photos/id/1012/60"
    }},
      {id:4, name: "James",
      phone:null,
      address:{city:"Berlin",
      photo:"https://picsum.photos/id/1013/60"
    }},
      {id:5, name: "John",
      phone:"123-460",
      address:{city:"New York",
      photo:"https://picsum.photos/id/1014/60"
    }},
    ],
   
  };
  customerNameStyle = (custName)=>{
    if(custName.startsWith("S")) 
    {return "green-highlight";
  }
    else if (custName.startsWith("J")) {return "red-highlight";}
    else return "";
  }

  render(){
      return <div>
          <h4 className="m-1 p-1">{this.state.pageTitle}
          <span className="badge badge-secondary m-2">{this.state.customerCount}</span>
         <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
          </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
           {this.getCustomerRow()}
           
          </tbody>
        </table>
           
          </div>; 
  } 
  onRefreshClick=()=> {
    console.log("Refresh clicked"); 
    this.setState({customerCount:7})
  }
  getPhoneToRender=(phone)=>{
    return phone==null?(<div className="bg-warning p-2 tex-center ">
    No Phone</div>)
  :(phone)
  }
  getCustomerRow =()=> {
  
  return  this.state.customers.map((cust)=>
    {
     return <tr key={cust.id}>
     <td>{cust.id}</td>
     <td><img src={cust.photo} alt="Customer"/></td>
     <td 
     className={this.customerNameStyle(cust.name)}
       >
         {cust.name}
         </td>
     <td>{this.getPhoneToRender(cust.phone)}</td>
     <td>{cust.address.city}</td>
   </tr>  
    }
    )}
  }
 