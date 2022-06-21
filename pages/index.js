/* eslint-disable @next/next/no-img-element */
import { ArrowDown2 } from 'iconsax-react';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';

export default function Home() {
  const testimonialsSlideSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    centerMode: true,
    autoplay: true,
    dots: true,
    centerPadding: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main>
      <Navbar />
      <header className="min-h-[calc(90vh)] bg-header bg-no-repeat bg-cover bg-center grid">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-6xl text-center text-white leading-[100px]">
            Empower your <span className="text-brandgold">business</span>
          </h1>
          <p className="w-fill md:w-1/2 text-center text-white/80">
            Paynacle provides banking solutions that enable businesses to
            collect payments, access loans, manage operations and ultimately
            grow their business.
          </p>
          <button className="bg-gradient-to-b from-gradientStart to-gradientEnd rounded-full py-4 px-6 mt-8 flex items-center gap-4">
            <span className="text-white">Download app</span>
            <ArrowDown2 size="16" color="#FF8A65" variant="Bold" />
          </button>
        </div>
      </header>

      <div className="relative h-[200px] mb-[300px] md:mb-44">
        <img
          src="/phones.png"
          alt="phonesample"
          className="w-[80%] md:w-auto md:h-[500px] absolute md:-top-52 left-1/2 -translate-x-1/2"
        />
      </div>

      <section className="my-28">
        <div className="container">
          <p className="text-center text-sm text-brand uppercase tracking-widest">
            Amazing features
          </p>
          <p className="text-4xl font-bold text-center">
            Features that work for You
          </p>

          <div className="min-h-[200px] flex flex-col md:flex-row md:gap-8 items-center mt-20">
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white rounded-2xl p-8 min-h-[180px] flex flex-col md:flex-row md:items-center gap-5">
                <div className="bg-[#8A8095]/5 min-w-[120px] h-28 rounded-xl grid place-content-center">
                  <img src="/Coin.svg" alt="coin" />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-2xl text-dark font-bold">
                    Easy & fast Transactions
                  </p>
                  <p className="text-sm text-[#8A8095]">
                    Access payments from your customers. Get paid instantly. All
                    Payments are insured by NCC and data transmissions are
                    securely encrypted.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 min-h-[180px] flex flex-col md:flex-row md:items-center gap-5">
                <div className="bg-[#8A8095]/5 min-w-[120px] h-28 rounded-xl grid place-content-center">
                  <img src="/Thumbs.svg" alt="coin" />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-2xl text-dark font-bold">
                    Everything you need, in one place
                  </p>
                  <p className="text-sm text-[#8A8095]">
                    From airtime purchase, to electricty and water bills,
                    Paynacle has you covered. We offer all the services you need
                    all in one app.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 min-h-[180px] flex flex-col md:flex-row md:items-center gap-5">
                <div className="bg-[#8A8095]/5 min-w-[120px] h-28 rounded-xl grid place-content-center">
                  <img src="/Customer.svg" alt="coin" />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-2xl text-dark font-bold">
                    24/7 Customer Support
                  </p>
                  <p className="text-sm text-[#8A8095]">
                    Our customer care agents are available at your finger tips
                    every day of the week on the app and on our social media
                    handles.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <img src="/showcase.png" alt="showcase" className="h-[700px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="my-40">
        <div className="container flex flex-col md:flex-row gap-20">
          <div className="flex-1 flex flex-col order-2">
            <p className="text-sm text-brand uppercase tracking-widest">
              WHO WE ARE
            </p>
            <p className="text-4xl font-bold">About us</p>
            <div className="mt-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus in ornare quam viverra orci sagittis eu volutpat
                odio facilisis mauris sit amet massa
              </p>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo.
              </p>
            </div>
          </div>

          <div className="flex-1 order-1">
            <img
              src="/abt.png"
              alt="about"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="my-40">
        <div className="container">
          <div className="my-8">
            <p className="text-sm text-brand uppercase tracking-widest text-center">
              TESTIMONIALS
            </p>
            <p className="text-4xl font-bold text-center">
              What our customers Say
            </p>
          </div>

          <div className="">
            <Slider
              className="flex items-center testimonials"
              {...testimonialsSlideSettings}
            >
              <div className="w-[680px] min-h-[100px] rounded-xl p-6">
                <div className="flex flex-col md:flex-row gap-8 items-cente">
                  <div className="w-24 h-24 border-[10px] border-slate-500/10 rounded-full">
                    <img
                      src="/dp.png"
                      alt="dp"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elementum facilisis leo, vel fringilla est
                      ullamcorper eget nulla facilisi etiam dignissim diam quis
                      enim lobortis scelerisque fermentum dui faucibus in ornare
                      quam viverra orci sagittis eu volutpat odio facilisis
                      mauris sit amet massa
                    </p>

                    <div className="mt-8">
                      <p className="text-brand">Crystal Oliver</p>
                      <p className="text-sm text-[#8A8095]">
                        Freelance Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[680px] min-h-[100px] rounded-xl p-6">
                <div className="flex flex-col md:flex-row gap-8 items-cente">
                  <div className="w-24 h-24 border-[10px] border-slate-500/10 rounded-full">
                    <img
                      src="/dp.png"
                      alt="dp"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elementum facilisis leo, vel fringilla est
                      ullamcorper eget nulla facilisi etiam dignissim diam quis
                      enim lobortis scelerisque fermentum dui faucibus in ornare
                      quam viverra orci sagittis eu volutpat odio facilisis
                      mauris sit amet massa
                    </p>

                    <div className="mt-8">
                      <p className="text-brand">Crystal Oliver</p>
                      <p className="text-sm text-[#8A8095]">
                        Freelance Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[680px] min-h-[100px] rounded-xl p-6">
                <div className="flex flex-col md:flex-row gap-8 items-cente">
                  <div className="w-24 h-24 border-[10px] border-slate-500/10 rounded-full">
                    <img
                      src="/dp.png"
                      alt="dp"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elementum facilisis leo, vel fringilla est
                      ullamcorper eget nulla facilisi etiam dignissim diam quis
                      enim lobortis scelerisque fermentum dui faucibus in ornare
                      quam viverra orci sagittis eu volutpat odio facilisis
                      mauris sit amet massa
                    </p>

                    <div className="mt-8">
                      <p className="text-brand">Crystal Oliver</p>
                      <p className="text-sm text-[#8A8095]">
                        Freelance Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <footer className="min-h-[400px] bg-footer w-full bg-no-repeat bg-cover">
        <div className="container pt-24">
          <img
            src="/logo-block.svg"
            alt="logo"
            className="w-28 block mx-auto"
          />

          <p className="mt-12 mb-6 text-center text-white">connect with us</p>
          <img src="/socials.svg" alt="socials" className="block mx-auto" />
        </div>
      </footer>
    </main>
  );
}
