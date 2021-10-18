import LayoutPage from "components/LayoutPage/LayoutPage";
import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import { Helmet } from "react-helmet";

export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Facebook İle Devam Et",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Twitter İle Devam Et",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Google İle Devam Et",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Giriş Yap | Girişim Haberleri</title>
      </Helmet>
      <LayoutPage
        subHeading="Hesabın varsa hemen giriş yap ve en son haberleri kaçırma!"

        heading="Girişim Haberlerine Hoşgeldin"
      >
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email adresin
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Şifren
                <NcLink to="/forgot-pass" className="text-sm">
                  Şifreni Mi Unuttun?
                </NcLink>
              </span>
              <Input type="password" className="mt-1" />
            </label>
            <ButtonPrimary type="submit">Giriş Yap</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Henüz Katılmadın Mı? {` `}
            <br />
            <NcLink to="/signup">Hemen kaydol ve aramıza katıl!</NcLink>
          </span>
        </div>
      </LayoutPage>
    </div>
  );
};

export default PageLogin;
