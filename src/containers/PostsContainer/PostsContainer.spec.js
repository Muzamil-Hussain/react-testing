import { PostsContainer } from "./PostsContainer";
import { shallow } from "enzyme";
import { testStore } from "../../utils/index";
import React from "react";
import { Provider } from "react-redux";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <PostsContainer />
    </Provider>
  );

  return wrapper;
};

describe("Posts Container", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: {
        data: [
          {
            title: "Example title 1",
            body: "Some text",
            id: 1,
          },
          {
            title: "Example title 2",
            body: "Some text",
            id: 2,
          },
          {
            title: "Example title 3",
            body: "Some text",
            id: 3,
          },
        ],
      },
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", async () => {
    expect(wrapper.find("PostsContainer").length).toEqual(1);
  });
});
