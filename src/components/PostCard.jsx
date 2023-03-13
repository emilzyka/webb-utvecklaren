import React from 'react';

export const PostCard = ({ postData }) => {
    return (
        <div>
            <a href={postData.frontmatter.path}>{postData.frontmatter.title}</a>
        </div>
    );
};
