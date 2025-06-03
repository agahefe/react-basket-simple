import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


export default class AddProduct extends Component {
    state={name:"",qis:"",unitprice:""}
    onChange=event=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
    }
    onSubmit=(event)=>{
        event.preventDefault();
        alertify.success(this.state.name);
        alertify.success(this.state.qis);
        alertify.success(this.state.unitprice);
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input name='name' type='text' id='name' placeholder='Enter a Name' onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="qis">Quantity In Stock</Label>
                <Input name='qis' type='number' id='qis' placeholder='Enter stock number' onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="unitprice">Unit Price</Label>
                <Input name='unitprice' type='value' id='unitprice' placeholder='Enter the price' onChange={this.onChange}/>
            </FormGroup>
            <Button type='submit'>Save</Button>
        </Form>
      </div>
    )
  }
}
