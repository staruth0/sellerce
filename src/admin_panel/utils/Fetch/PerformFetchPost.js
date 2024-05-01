<<<<<<< HEAD
const performFetchPost = (url, data, navigate) => {
=======
const performFetchPost = (url, data) => {
>>>>>>> ef28d929a132173140a497081765af48e849093b
  return fetch(`https://appleproductsbackend.vercel.app/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Response:', responseData);
      // Handle the response data here
      alert(`New Category Added: ${data.categoryName}`);
<<<<<<< HEAD
      navigate();
=======
>>>>>>> ef28d929a132173140a497081765af48e849093b
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
};

export default performFetchPost;
