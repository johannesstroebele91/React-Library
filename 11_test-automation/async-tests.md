# Basics

Is possible using

- async, await, and find function
- as shown below

```javascript
import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
  test("renders posts if requests succeeds", async () => {
    render(<Async />);

    // Problem: initially the array is empty, therefore getAllByRole fails due to useState([])
    // Solution: findAllByRole for requests, which take time, BUT async needs to be added to test above
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
```

# Problems

Normally we don't want to send real requests

- because it costs network traffics
- and post requests modify the real data in the database
- which is not wanted

# Solution

Either

- don't send a real request (writing a dummy function)
- OR send it to a save, testing server

```javascript
import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {
  test("renders posts if requests succeeds", async () => {
    // overwrite fetch function, with a fetch mock funtion by jest
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First post" },
        { id: "p2", title: "Second post" },
        { id: "p3", title: "Third post" },
      ],
    });
    render(<Async />);

    // Problem: initially the array is empty, therefore getAllByRole fails due to useState([])
    // Solution: findAllByRole for requests, which take time, BUT async needs to be added to test above
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
```
