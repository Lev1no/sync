import './styles/App.css';
import './styles/datepicker.css';
// for material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// importing components
import BasicDateCalendar from './components/datepicker';
import BasicTimeRangeField from './components/timepicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to sync!</h1>
        <h2>create a link to sync your schedules now!</h2>
        <BasicDateCalendar></BasicDateCalendar>
        <BasicTimeRangeField></BasicTimeRangeField>
      </header>
    </div>
  );
}

export default App;
