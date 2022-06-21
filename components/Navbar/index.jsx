/* eslint-disable @next/next/no-img-element */
function Navbar() {
  return (
    <div className="h-28 w-full flex items-center fixed top-0 z-50 bg-[#16002B]">
      <div className="container flex justify-between">
        <img src="/logo-inline.svg" alt="logo" />
        <div className="flex items-center gap-6 text-white">
          <p>Home</p>
          <p>About us</p>
          <p>Testimonials</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
