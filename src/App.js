import logo from './logo.svg';
import './App.css';
import WizardForm from './components/WizardForm';

function App() {
  return (
      <div>
        <WizardForm onSubmit={(wizard) => {
          console.log('====wiz here====');
          console.log(wizard);
        }} />

      </div>
  
  );
}

export default App;
