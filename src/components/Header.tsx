import DarkModeToggle from "./DarkModeToggle";
import ResetButton from "./ResetButton";

function Header() {
  return (
    <header className="flex flex-row justify-between p-5 max-w-4xl mx-auto gap-2">
      <h1 className="text-xl md:text-3xl font-bold justify-center">
        🎯Task Manager
      </h1>
      <div className="flex lg:justify-between gap-2">
        <DarkModeToggle />
        <ResetButton />
      </div>
    </header>
  );
}

export default Header;
