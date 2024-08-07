"use client"

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookiePolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie-consent", "true", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-100 dark:bg-neutral-900 border-gray-200 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-evenly items-center">
        <p className="text-gray-700 dark:text-gray-400 text-center md:text-left text-sm">
        IntellectAI uses cookies to enhance your browsing experience, personalize content, and analyze our traffic. By continuing to use our website, you consent to our use of cookies.{" "}
          <a href="/cookie-policy" className="underline text-blue-300">
            Learn more
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="mt-3 md:mt-0 text-xs bg-neutral-700 text-white px-2 py-2 rounded hover:bg-neutral-600 transition duration-300"
        >
          Accept all cookies
        </button>
        <button
          onClick={handleAccept}
          className="mt-3 md:mt-0 text-xs bg-neutral-200 text-black px-2 md:ml-5 py-2 rounded hover:bg-neutral-400 transition duration-300"
        >
          Accept only necessary cookies
        </button>
      </div>
    </div>
  );
};

export default CookiePolicy;
