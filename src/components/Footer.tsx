function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full p-5 flex justify-center fixed bottom-0 bg-white dark:bg-slate-700 z-10">
      {year} &copy;{" "}
      <a href="https://aidocode.com/" target="_blank" rel="noreferrer">
        Andrii Iudchenko
      </a>
    </footer>
  );
}

export default Footer;
