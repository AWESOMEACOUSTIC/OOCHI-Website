const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 w-full">
      <div className="max-w-7xl mx-auto py-16">
        {/* Top headings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h1 className="text-6xl md:text-8xl font-[grostesk-semibold-v1] font-extrabold uppercase leading-[5vw]">
            EYE-<br />OPENING
          </h1>
          <h1 className="text-6xl md:text-[8vw] font-extrabold uppercase leading-tight font-[grostesk-semibold-v1]">
            PRESENTATIONS
          </h1>
        </div>

        {/* Contact / Links section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* empty columns to shift content to the right on md+ */}
          <div className="hidden md:block" />
          <div className="hidden md:block" />

          {/* S: / L: / E: column */}
          <div className="font-[grostesk-semibold-v2]">
            <p className="font-medium uppercase">S:</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  Behance
                </a>
              </li>
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  Linkedin
                </a>
              </li>
            </ul>

            <p className="font-medium uppercase mt-6">L:</p>
            <ul className="mt-2 space-y-2 font-[grostesk-semibold-v2]">
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  202-1965 W 4th Ave
                </a>
              </li>
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  Vancouver, Canada
                </a>
              </li>
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  30 Chukarina St
                </a>
              </li>
              <li>
                <a href="#" className="underline text-gray-900 hover:text-gray-700">
                  Lviv, Ukraine
                </a>
              </li>
            </ul>

            <p className="font-medium uppercase mt-6">E:</p>
            <ul className="mt-2">
              <li>
                <a
                  href="mailto:hello@ochi.design"
                  className="underline text-gray-900 hover:text-gray-700"
                >
                  hello@ochi.design
                </a>
              </li>
            </ul>
          </div>

          {/* M: menu column */}
          <div>
            <p className="font-medium uppercase">M:</p>
            <ul className="mt-2 space-y-2">
              {['Home', 'Services', 'Our work', 'About us', 'Insights', 'Contact us'].map((item) => (
                <li key={item}>
                  <a href="#" className="underline text-gray-900 hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 -mb-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="text-xl font-bold font-[grostesk-semibold-v2]">ochi</div>
          <div className="mt-3 md:mt-0 font-[grostesk-semibold-v2] pl-42">
            © ochi design 2025.{' '}
            <a href="#" className="underline text-gray-500 hover:text-gray-700 font-[grostesk-semibold-v2]">
              Legal Terms
            </a>
          </div>
          <div className="mt-3 md:mt-0 font-[grostesk-semibold-v2]">Website by Obys</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
