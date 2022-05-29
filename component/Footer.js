const Footer = () => {
  return (
    <div className="bg-slate-300">
      <div>
        <p className="">
          © 2021 - {new Date().getFullYear()}, Built with&nbsp;
          <a
            href="https://nextjs.org/"
            className="text-indigo-500 hover:text-amber-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{' '}
          &&nbsp;
          <a
            href="https://tailwindcss.com"
            className="text-indigo-500 hover:text-lime-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
          .
        </p>
      </div>
      <div>
        <p className="">
          Another&nbsp;
          <a
            href="https://mountaintopcoding.dev"
            className="text-indigo-500 hover:text-fuchsia-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            mountainTopCoding(
            <span role="img" aria-label="mountain with snow-cap">
              &#127956;
            </span>
            );
          </a>{' '}
          project
        </p>
      </div>
    </div>
  );
};

export default Footer;
