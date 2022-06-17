import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search])

  console.log(params)
  console.log(queryParams.get('meuQueryParam'))

  return (
    <h1>Post</h1>
  )
}

export default Post;