import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils/index";
import { Comment } from "./Comment";

describe("Comment Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        user: "Muzamil Hussain",
        email: "muzamilsethar@gmail.com",
        text: "This is a test comment to check prop types of comment component",
      };
      const propsError = checkProps(Comment, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        user: "Muzamil Hussain",
        email: "muzamilsethar@gmail.com",
        text: "This is a test comment to check prop types of comment component",
      };
      wrapper = shallow(<Comment {...props} />);
    });

    it("Should render without error", async () => {
      const component = await findByTestAtrr(wrapper, "comment");

      expect(component.length).toBe(1);
    });

    it("Should render comment header", async () => {
      const header = await findByTestAtrr(wrapper, "comment__header");
      expect(header.length).toBe(1);
    });

    it("Should render username in the header who has posted the comment", async () => {
      const user = await findByTestAtrr(wrapper, "comment__header--user");
      expect(user.length).toBe(1);
    });

    it("Should render email of the user in the header who has posted the comment", async () => {
      const email = await findByTestAtrr(wrapper, "comment__header--email");
      expect(email.length).toBe(1);
    });

    it("Should render comment body", async () => {
      const body = await findByTestAtrr(wrapper, "comment__body");
      expect(body.length).toBe(1);
    });
    it("Should render comment text in the body", async () => {
      const text = await findByTestAtrr(wrapper, "comment__body--text");
      expect(text.length).toBe(1);
    });
  });
});
