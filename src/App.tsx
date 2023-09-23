import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { TasksProvider } from "./contexts/TasksContext";

function App() {
  return (
    <TasksProvider>
      <div className="h-full min-h-screen dark:bg-slate-800 dark:text-slate-100 text-slate-950">
        <Header />
        <Main />
        <Footer />
      </div>
    </TasksProvider>
  );
}

export default App;
