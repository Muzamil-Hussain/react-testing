import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils/index";
import { PostCard } from "./PostCard";

describe("Post Card Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        id: 1,
        title: "This is the title of the post",
        body: "This is a test description to check prop types of post card component",
      };
      const propsError = checkProps(PostCard, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        id: 1,
        title: "This is the title of the post",
        body: "This is a test description to check prop types of post card component",
      };
      wrapper = shallow(<PostCard {...props} />);
    });

    it("Should render without error", async () => {
      const component = await findByTestAtrr(wrapper, "post");

      expect(component.length).toBe(1);
    });

    it("Should render post link wrapped in the heading", async () => {
      const link = await findByTestAtrr(wrapper, "post__link");
      expect(link.length).toBe(1);
    });

    it("Should render title of the post", async () => {
      const title = await findByTestAtrr(wrapper, "post__title");
      expect(title.length).toBe(1);
    });

    it("Should render post body", async () => {
      const body = await findByTestAtrr(wrapper, "post__body");
      expect(body.length).toBe(1);
    });
  });
});
