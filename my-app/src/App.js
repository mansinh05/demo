import './App.css';
import Counter from './components/Counter';
import MyExample from './components/MyExample';
import DemoCode from './components/DemoCode';

function App() {
  return (
    <div className="App">
      <MyExample name="vansh" address="kodinar"/>
      <Counter/>
      
      <DemoCode name='mansinh ' address="india" tag ="hero"/>

    </div>
  );
};

export default App;
