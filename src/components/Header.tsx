import DarkModeToggle from "./DarkModeToggle";
import ResetButton from "./ResetButton";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-2xl mx-auto gap-2">
      <h1 className="text-xl md:text-3xl font-bold justify-center">
        What are you up to today?
      </h1>
      <div>
        <DarkModeToggle />
        <ResetButton />
      </div>
    </header>
  );
}

export default Header;
