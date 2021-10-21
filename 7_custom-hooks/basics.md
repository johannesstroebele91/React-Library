# Basics

Can only use React hooks in

- React components function
- and custom hooks

Are functions that enable to

- outsources stateful logic (hooks)
- into re-usable functions
- which regular functions cannot use

For example,

- useHistory() can be used in an usePageOpener() custom hook
- which enables to re-use functions with hooks

A custom hook can return

- everything
- e.g. number, array

# HowTo

All hooks need to start with use - IT IS A MUST!!!

# Easy example

## create a custom hook: use-counter.tsx

```javascript
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};
```

## calling a custom hook: ForwardCounter.js

```javascript
const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};
```

# Complex example

## Creating a custom hook: use-http.tsx

```javascript
const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  // Shorthand: isLoading: isLoading, error: error, sendRequest: sendRequest
  return { isLoading, error, sendRequest };
};
```
