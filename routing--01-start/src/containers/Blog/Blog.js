import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;