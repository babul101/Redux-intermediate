import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class CarsList extends Component {

    listOfCars = ({list}) => {
        if(list) {
            return list.map((car)=>{
                return(
                    <Link key={car.id} to={`/car/${car.id}`} className='car_item'>
                        <div className='left'>
                            <img src={`/images/${car.image}`}  alt='b'/>
                        </div>
                        <div className='right'>
                            <h4>{car.model}</h4>
                            <h6>{car.brands}</h6>
                        </div>
                    </Link>
                )
            })
        }
    }


  render() {
    return (
      <div>
          {this.listOfCars(this.props.cars)}
      </div>
    )
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cars:state.cars
    }
}

export default connect(mapStateToProps,null)(CarsList);