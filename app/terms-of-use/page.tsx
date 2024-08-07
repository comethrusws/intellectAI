"use client"
import { useEffect, useState } from "react";
export default function termsofUse() {
  const [headerName, setHeaderName] = useState('intellectAI');
    
  useEffect(() => {
      const newHeaderName = "Terms of use | intellectAI";
      setHeaderName(newHeaderName);
      document.title = newHeaderName;
  }, []);
  return (
    <main className="flex flex-col items-center justify-between p-10 md:p-24">
      <small className="text-xs md:text-sm py-4 items-center">Updated: July 3, 2024</small>
      <h1 className="text-4xl md:text-5xl font-normal items-center mb-6">Terms of Use</h1>

      <div className="text-left px-36 mt-8 text-[16px]">
        <small className="mt-7 text-[16px] text-left justify-start">
          <b>Effective</b> September 12, 2024 (previous version)
        </small>

        <p className="mt-4">Thank you for using intellectAI!</p>

        <p className="mt-4">
          These Terms of Use
          ("Terms") are important as they outline the rules and guidelines for using our AI-driven
          tools and platforms, including SIMRIK and other associated software applications and
          websites ("Services"). By using our Services, you agree to comply with these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p className="mt-4">
          By accessing and using our Services, you acknowledge that you have read, understood, and
          agree to be bound by these Terms and any additional guidelines or policies referenced
          herein.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Eligibility</h2>
        <p className="mt-4">
          To use our Services, you must be at least 18 years old or have the legal capacity to
          enter into these Terms. If you are using the Services on behalf of an organization, you
          represent and warrant that you have the authority to bind the organization to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Account Registration</h2>
        <p className="mt-4">
          You may be required to create an account to access certain features of the Services. You
          agree to provide accurate, complete, and up-to-date information during the registration
          process and to keep your account information current.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Use of Services</h2>
        <p className="mt-4">
          You agree to use our Services in compliance with applicable laws and regulations. You must
          not engage in any activity that could harm, disrupt, or interfere with the functioning of
          the Services or the experience of other users.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Intellectual Property</h2>
        <p className="mt-4">
          All intellectual property rights in the Services, including but not limited to software,
          content, trademarks, and logos, are owned by IntellectAI or its licensors. You are granted
          a limited, non-exclusive, non-transferable license to use the Services for personal or
          internal business purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Privacy</h2>
        <p className="mt-4">
          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and
          protect your personal information. By using our Services, you consent to our collection
          and use of your information as described in the Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Disclaimers</h2>
        <p className="mt-4">
          The Services are provided "as is" and "as available" without any warranties or
          representations, express or implied. IntellectAI disclaims all warranties, including but
          not limited to merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Limitation of Liability</h2>
        <p className="mt-4">
          To the fullest extent permitted by law, IntellectAI shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
          other intangible losses, resulting from (a) your use or inability to use the Services; (b)
          any unauthorized access to or use of our servers and/or any personal information stored
          therein; (c) any interruption or cessation of transmission to or from the Services; (d)
          any bugs, viruses, trojan horses, or the like that may be transmitted to or through our
          Services by any third party; (e) any errors or omissions in any content or for any loss or
          damage incurred as a result of the use of any content posted, emailed, transmitted, or
          otherwise made available through the Services; and/or (f) the defamatory, offensive, or
          illegal conduct of any third party.
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Modifications to the Terms</h2>
        <p className="mt-4">
          IntellectAI reserves the right to modify these Terms at any time. Any changes will be
          effective immediately upon posting the revised Terms on our website. Your continued use of
          the Services following the posting of any changes constitutes your acceptance of the
          modified Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">11. Termination</h2>
        <p className="mt-4">
          IntellectAI may terminate or suspend your access to the Services at any time, with or
          without cause or notice, effective immediately. Upon termination, your right to use the
          Services will immediately cease.
        </p>

        <h2 className="text-2xl font-semibold mt-6">12. Governing Law</h2>
        <p className="mt-4">
          These Terms shall be governed by and construed in accordance with the laws of the
          jurisdiction in which IntellectAI is headquartered, without regard to its conflict of law
          principles.
        </p>

        <h2 className="text-2xl font-semibold mt-6">13. Contact Information</h2>
        <p className="mt-4">
          If you have any questions about these Terms, please contact us at support@intellectai.com.
        </p>
      </div>
    </main>
  );
}
