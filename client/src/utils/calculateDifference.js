export const calculateDifference = async (start, end) => {
  const response = await fetch('http://localhost:3000/difference', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ start, end }),
  });

  const data = await response.json();
  return data;
};
