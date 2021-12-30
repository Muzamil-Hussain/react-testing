import moxios from "moxios";
import { testStore } from "../utils/index";
import { fetchPosts } from "../store/actions/index";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
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
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts.data).toBe(expectedState);
    });
  });
});
