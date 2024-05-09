function App() {

  // Inside your component function, you can write whatever JavaScript code you need.
  const listOfThings = ['Raindrops on roses', 'Whiskers on kittens', 'Bright copper kettles', 'Warm woolen mittens'];
  const number = 42;

  // The component function must return the JSX that will be rendered to the DOM.
  return (
    <>
    <header><h1>Learning React</h1></header>
    <main>
      <p>Hello, World!</p>

      <p>2 + 2 = {2 + 2}</p>

      <p>What is the answer?</p>
      <p>{number === 42? <li>42 is the answer!</li> : <li>The answer is not 42.</li>}</p>

      <h2>Favorite Things</h2>
      <ul>
        {listOfThings.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
    </>
  )
}

export default App
