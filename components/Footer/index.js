const Footer = () => {
  return (
    <footer className="text-2xl flex flex-col md:flex-row items-center py-10">
      <span className="block mb-4 md:mr-10">&copy; always</span>
      <a className="block mb-4 md:mr-10 text-fuchsia-600 underline" href="/steve-norell-resume-2024.pdf" download>resume</a>
      <a className="block mb-4 md:mr-10 text-fuchsia-600 underline" href="https://www.linkedin.com/in/stevenorell/" target="_blank" rel="noopener noreferrer">linkedin</a>
    </footer>
  )
}

export default Footer;
