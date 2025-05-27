import { HashRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import FindAndRemoveGame from './components/FindAndRemoveGame';
import RightChoiceGame from './components/RightChoiceGame';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/find-and-remove" element={<FindAndRemoveGame />} />
        <Route path="/right-choice" element={<RightChoiceGame />} />
      </Routes>
    </HashRouter>
  );
}
