import expect from 'expect';
import React from 'react';
import { Link } from 'react-router';
import TestUtils from 'react-addons-test-utils';
import AccountListItem from '../src/components/account-list-item.js';

function setup() {
  const props = {
    account: {
      id: 1,
      accountNumber: "33892878830009",
      accountName: "Checking",
      amount: 200
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<AccountListItem account={props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe("components", () => {
  describe("AccountListItem", () => {
    it("displays link back to the account page", () => {
      const { output, props } = setup();
      const link = output.props.children[0].props.children;
      expect(link.type).toBe(Link);
      expect(link.props.to).toBe("/accounts/" + props.id);
    });

    it("displays the account type", () => {
      const { output, props } = setup();
      const td = output.props.children[1];
      expect(td.type).toBe('td');
      expect(td.props.children).toBe(props.accountType);
    });

    it("displays the account amount", () => {
      const { output, props } = setup();
      const td = output.props.children[2];
      expect(td.type).toBe('td');
      expect(td.props.children).toBe("$" + props.amount);
    });

    it("displays tr component", () => {
      const { output } = setup();
      expect(output.type).toBe('tr');
    });
  });
});
