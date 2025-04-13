export const Header = () => {
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-10">
      <nav className="w-fit flex  gap-1 rounded-full p-0.5 border border-white/15 bg-white/10 backdrop:blur">
          <a href="#" className="nav-item">Home</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:text-gray-900 hover:bg-white/70">Contact</a>
      </nav>
    </div>
  );
};
