module.exports.handler = async (event) => {
  console.log('Event: ', event);
  const responseMessage = `Time is ${Math.floor(Date.now() / 1000)}`

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}
