import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact activeClassName="my-active" activeStyle={{ color: '#fa923f', textDecoration: 'underline' }}>Posts</NavLink></li>
                            <li><NavLink to={{ pathname: '/new-post', hash: '#submit', search: '?quick-submit=true' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Both render or component work
                    <Route path="/" exact render={() => <Posts />} />
                    <Route path="/new-post" exact render={() => <h1>New Post</h1>} />*/}
                <Switch>
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Redirect exact from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                    <Redirect from="/all-courses" to="/courses" />
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;