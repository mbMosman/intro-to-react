import Header from './components/Header';
import List from './components/List';

function App() {

  // Inside your component function, you can write whatever JavaScript code you need.
  const listOfThings = ['Raindrops on roses', 'Whiskers on kittens', 'Bright copper kettles', 'Warm woolen mittens'];
  const number = 42;

  // The component function must return the JSX that will be rendered to the DOM.
  return (
    <>
    <Header />
    <main>
      <p>Hello, World!</p>

      <h2>Favorite Things</h2>
      <List items={listOfThings} />
    </main>
    </>
  )
}

export default App
