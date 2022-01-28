import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '����1' },
    { id: 2, title: '����1' },
    { id: 3, title: '����1' },
    { id: 4, title: '����1' },
    { id: 5, title: '����1' },
  ]);

  return (
    <div>
      <h1>List Page</h1>
      <hr />
      {posts.map((post) => {
        <StyledItemBoxDiv>
          <div>
            number: {post.id} title: {post.title}number: {post.id} title:{' '}
            {post.title}
          </div>
          <div>
            <button>Delete</button>
          </div>
        </StyledItemBoxDiv>;
      })}
    </div>
  );
};

export default ListPage;
