const baseUrl = process.env.REACT_APP_BASE_URL;

const graphQLRequest = async (query) => {
  try {
    return await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });
  } catch (error) {
    console.log(error);
  }
};

export default graphQLRequest;
