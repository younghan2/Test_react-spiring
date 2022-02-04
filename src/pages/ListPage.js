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
  const no = 6;
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: 'title1', content: 'content1' },
    { id: 2, title: 'title2', content: 'content2' },
    { id: 3, title: 'title3', content: 'content3' },
    { id: 4, title: 'title4', content: 'content4' },
    { id: 5, title: 'title5', content: 'content5' },
  ]);

  const handleWrite = () => {
    setPosts(...posts, post);
  };

  const handleForm = (e) => {
    // computed property names 문법 (키값 동적할당)
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>List Page</h1>
      <form>
        <input
          type="text"
          placeholder="title"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="content"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          Write
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            number: {post.id} / title: {post.title} / content: {post.content}
          </div>
          <div>
            <button>Delete</button>
          </div>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
