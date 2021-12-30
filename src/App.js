import { PostDetailContainer, PostsContainer } from "./containers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PostsContainer />} />
          <Route
            exact
            path="/posts/:postId"
            element={<PostDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
