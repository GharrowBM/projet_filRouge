import {Link, Redirect} from "react-router-dom"
import React from 'react'
import {connect} from "react-redux";
import {searchPosts} from "../store/actions/postsActions";
import '../styles/components/NavBar.css';

class NavBar extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    searchPosts(e) {
        e.preventDefault()

        this.props.searchPosts(this.state.inputValue)
    }

    logOutUser(e) {
        e.preventDefault()
        localStorage.setItem('connectionToken', [])
        window.location.href = '/';
        return false;
    }

    render () {

        return (
            <nav className="header-navbar">
                    <Link to="/">Home</Link>
                    <div className="search-area">
                    <label className="search-label">root@ </label>
                    <input type="text" name="search-input" id="search-input" placeholder="Search..." value={this.inputValue} onChange={(e) => this.setState({inputValue: e.currentTarget.value})}/>
                    <button className="search-submit" onClick={(e) => this.searchPosts(e)}>Search</button>
                    </div>
                {this.props.currentUser ? <Link to="/" onClick={(e) => this.logOutUser(e)}>Log Out</Link> : <Link to="/signin">Log In</Link>}
                {this.props.currentUser ? <Link to="/question/add">Add Question</Link> : <Link to="/register">Sign Up</Link>}
                {this.props.currentUser ? <Link to="/accountdetails"><img src={this.props.currentUserAvatarPath.replaceAll("/", "\\")} alt={"avatar"}/>{this.props.currentUser.username}</Link> : null}
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.users.isLoading,
        currentUser: state.users.currentUser,
        currentUserAvatarPath: state.users.currentUserAvatarPath
    }
}

const mapActionToProps = (dispatch) => {
    return {
        searchPosts: (searchString) => dispatch(searchPosts(searchString)),
    }
}

export default connect(mapStateToProps, mapActionToProps)(NavBar)