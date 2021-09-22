import React from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';
const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color='info'>Все</Button>
            <Button outline color='info'>Понравилось</Button>
        </div>
    )
}

export default PostStatusFilter;