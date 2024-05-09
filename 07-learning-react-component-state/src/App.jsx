import Header from './components/Header';
import List from './components/List';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {

  // Inside your component function, you can write whatever JavaScript code you need.
  const listOfThings = ['Raindrops on roses', 'Whiskers on kittens', 'Bright copper kettles', 'Warm woolen mittens'];

  // The component function must return the JSX that will be rendered to the DOM.
  return (
    <>
    <Header title="Learning React" />
    <main>
      <Welcome />

      <h2>Favorite Things</h2>
      <List items={listOfThings} />

      <Counter />
    </main>
    </>
  )
}

export default App
