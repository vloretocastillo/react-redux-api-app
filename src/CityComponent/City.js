import React from 'react';
import './City.css';
import { connect } from 'react-redux'
// import { retrieveCity } from '../actions/dataActions'

class City extends React.Component {
   
    state = {
        
    }
  
    

    componentDidMount() {
    }

    render() {
    

       


        return (
            <div className="main-container">
                {this.props.city}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         retrieveCities: () => dispatch(retrieveCities())
//     }
// }


export default connect(mapStateToProps, null)(City);