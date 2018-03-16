import React, { Component } from 'react';
import Posts from './Posts/Posts';
import './Blog.css';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/new-post'>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* Both render or component work
                    <Route path="/" exact render={() => <Posts />} />
                    <Route path="/new-post" exact render={() => <h1>New Post</h1>} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;