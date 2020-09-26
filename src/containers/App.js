import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../Actions';

const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    
    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });

        if(isPending === true){
            return <h1 className='tc'>Loading...</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>                    
                </div>
            );
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);