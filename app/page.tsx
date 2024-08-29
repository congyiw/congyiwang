// app/page.tsx
const HomePage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to My Personal Website</h2>
      <p className="text-lg mb-4">
        I am a web developer with a passion for creating beautiful and functional websites. Explore my site to learn more about my work and get in touch.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p>
            Learn more about my background, skills, and experiences.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">My Projects</h3>
          <p>
            Check out some of the projects I've worked on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
