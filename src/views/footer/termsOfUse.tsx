import React from "react";
import termsofuse from "../../assets/images/terms-of-use.png";

const TermsOfUse: React.FC = () => {
  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${termsofuse})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">
            Terms and Conditions
          </p>
        </div>
      </div>
      <div className="md:w-[76%] justify-center m-auto px-3 my-7">
        <div>
          <h1 className="text-xl font-bold text-black mt-6 xl:text-2xl">
            Last Updated: 27th October 2024
          </h1>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Welcome to Hilance! By accessing or using our website and services,
            you agree to comply with and be bound by the following Terms and
            Conditions. Please read these terms carefully. If you do not agree
            with any part of these Terms and Conditions, you may not access or
            use our website or services.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            1. Acceptance of Terms
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            By accessing or using the Hilance website, you confirm that you have
            read, understood, and agree to be bound by these Terms and
            Conditions and our Privacy Policy. Hilance reserves the right to
            modify these terms at any time. Any changes will be effective upon
            posting the revised Terms and Conditions on our website.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            2. Use of Our Services
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Our services are intended solely for individuals who are 18 years of
            age or older. By using our website, you confirm that you are at
            least 18 years old or are accessing the site with the supervision of
            a parent or legal guardian.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            3. Intellectual Property Rights
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            All content, graphics, logos, images, software, and other materials
            on the Hilance website are the property of Hilance or its licensors
            and are protected by copyright, trademark, and other intellectual
            property laws. You may not reproduce, distribute, modify, or create
            derivative works from any part of our website or services without
            express written permission from Hilance.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">4. User Conduct</p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            When using our website, you agree to the following:
          </p>
          <div>
            <li className="text-sm py-3 xl:text-lg text-[#605e5e]">
              You will not use our services for any unlawful or fraudulent
              purposes.
            </li>
            <li className="text-sm py-3 xl:text-lg text-[#605e5e]">
              You will not disrupt or interfere with the security or performance
              of our website
            </li>
            <li className="text-sm py-3 xl:text-lg text-[#605e5e]">
              You will not use any automated means to access our services
              without our prior written consent.
            </li>
            <li className="text-sm py-3 xl:text-lg text-[#605e5e]">
              You will not upload or distribute any viruses, malware, or harmful
              code.
            </li>
            <li className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Hilance reserves the right to terminate or restrict your access to
              our services if you violate these Terms and Conditions.
            </li>
          </div>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            5. Third-Party Links
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Our website may contain links to third-party websites that are not
            operated by Hilance. These links are provided for your convenience
            only. Hilance has no control over the content and policies of
            third-party sites and does not endorse or assume any responsibility
            for them. We recommend reviewing the terms and privacy policies of
            any third-party sites you visit
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            6. Limitation of Liability
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            To the fullest extent permitted by law, Hilance shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to, loss of profits, data, or
            other intangible losses, resulting from your use or inability to use
            our services.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            7. Disclaimer of Warranties
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Our services are provided on an "as-is" and "as-available" basis
            without any warranties, express or implied, including, but not
            limited to, implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement. Hilance does not guarantee
            that our website will be error-free, secure, or uninterrupted.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            8. Indemnification
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            You agree to indemnify, defend, and hold harmless Hilance and its
            affiliates, directors, officers, employees, and agents from any and
            all claims, liabilities, damages, losses, or expenses, including
            legal fees, arising out of or related to your use of our website or
            services, your violation of these Terms and Conditions, or your
            violation of any third-party rights.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">
            9. Governing Law and Jurisdiction
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the United Arab Emirates. Any disputes
            arising from these terms shall be subject to the exclusive
            jurisdiction of the courts in the UAE.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">10. Termination</p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Hilance reserves the right to suspend or terminate your access to
            our website and services at any time, without notice, for conduct
            that we believe violates these Terms and Conditions, violates
            applicable law, or is harmful to our interests or those of other
            users.
          </p>
          <p className="text-lg font-bold mt-5 xl:text-xl">11. Contact Us</p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Email:{" "}
            <span className="text-blue-500 underline">info@hilance.app</span>
          </p>
          <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
            Address: Company Address
          </p>
        </div>
      </div>
    </div>
  );
};
export default TermsOfUse;
