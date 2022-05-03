import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
    
      <Header title="Kuroishi's">
      <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post 
        likes={20}
        post={{
          title: 'Title 01',
          subtitle: 'Subtitle 01'
        }}
      />
      <Post 
        likes={10}
        post={{
          title: 'Title 02',
          subtitle: 'Subtitle 02'
        }}
      />
      <Post 
        likes={50}
        post={{
          title: 'Title 03',
          subtitle: 'Subtitle 03'
        }}
      />
    </>
  )
};

export default App;
