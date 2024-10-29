import React from "react";
import cyberSecurity from "../../assets/images/cyber-security.png";
import { Box, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${cyberSecurity})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">
            PRIVACY POLICY
          </p>
        </div>
      </div>

      <div className="md:w-[76%] justify-center m-auto px-3 my-7">
        <div>
          <h1 className="text-xl font-bold text-black mt-6 xl:text-2xl">
            Last Updated: 27th October 2024
          </h1>
          <p className="text-sm py-3 xl:text-lg" style={{ color: "#605e5e" }}>
            Welcome to Hilance your privacy is important to us, and we are
            committed to protecting your personal information in accordance with
            UAE laws and industry best practices. This Privacy Policy explains
            how we collect, use, share, and safeguard your information when you
            interact with our website and services. By using our website, you
            consent to the terms of this Privacy Policy.
          </p>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              1. Information We Collect
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              We collect information to enhance and personalize your experience
              with our services, including:
            </p>
            <div>
              <li className="text-black text-sm xl:text-lg">
                Personal Information:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  When you register, subscribe, or fill out forms on our
                  website, we may collect identifiable details such as your
                  name, email address, phone number, and other contact
                  information.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                Usage Data:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  We collect information on how you interact with our site,
                  including IP address, browser type, pages visited, and other
                  usage details to help us improve our services.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                Cookies and Tracking Technologies:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  Our website uses cookies and similar technologies to remember
                  your preferences and gather usage statistics.
                </span>
              </li>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              2. How We Use Your Information
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              We may use your information for the following purposes, in
              compliance with UAE data protection regulations:
            </p>
            <div>
              <li className="text-black text-sm xl:text-lg">
                To Improve Our Services:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  Your feedback and interaction data allow us to optimize the
                  functionality of our website and services.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                To Communicate with You:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  We use your contact details to respond to inquiries, provide
                  customer support, and send updates regarding our services.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                To Customize Your Experience:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  We tailor content to meet your interests and provide a
                  personalized browsing experience.
                </span>
              </li>
            </div>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              To Maintain Security: We may use your information to secure our
              services, prevent fraud, and detect any unauthorized activities.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              3. Legal Basis for Processing
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              In accordance with UAE Personal Data Protection Law (PDPL), we
              process your personal information on the following grounds:
            </p>
            <div>
              <li className="text-black text-sm xl:text-lg">
                Consent:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  By using our website and services, you consent to the
                  collection and processing of your information.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                Performance of a Contract:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  Processing is necessary for fulfilling any contracts you enter
                  into with us.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                Legitimate Interests:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  We may process your information to pursue our legitimate
                  interests, such as improving services, in ways that do not
                  outweigh your privacy rights.
                </span>
              </li>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              4. How We Share Your Information
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Hilance does not sell or trade your personal information to third
              parties. We only disclose your information under these conditions:
            </p>
            <div>
              <li className="text-black text-sm xl:text-lg">
                Legal Compliance:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  We may disclose your information if required by UAE law or in
                  response to lawful requests from UAE authorities.
                </span>
              </li>
            </div>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Business Transfers: In the event of a merger, acquisition, or
              asset sale, your information may be transferred, subject to
              confidentiality obligations.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              5. International Data Transfers
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Our servers and business operations may be located outside the
              UAE. If we transfer your personal data outside the UAE, we will
              take all necessary measures to ensure the protection of your data
              in line with applicable UAE laws.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              6. Data Security
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              We use industry-standard security practices to protect your
              personal data from unauthorized access, alteration, disclosure, or
              destruction. However, no method of data transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              7. Data Retention
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Your personal data is retained only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required by UAE law. When no longer needed, we will delete or
              anonymize your data in a secure manner.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">8. Your Rights</p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Under UAE data protection laws, you have the following rights
              concerning your personal data:
            </p>
            <div>
              <li className="text-black text-sm xl:text-lg">
                Access and Correction:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  You may request access to your data and correct any
                  inaccuracies.
                </span>
              </li>
              <li className="text-black text-sm xl:text-lg">
                Withdrawal of Consent:{" "}
                <span className="text-sm py-3 xl:text-lg text-[#605e5e]">
                  : You can withdraw your consent to data processing at any time
                  (note that this may affect your ability to use certain
                  services). Deletion: You may request deletion of your personal
                  data, subject to any legal obligations that require us to
                  retain it.
                </span>
              </li>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              9. Third-Party Links
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Our website may contain links to third-party sites. This Privacy
              Policy applies only to our website, and we are not responsible for
              the privacy practices of these external sites. We encourage you to
              review the privacy policies of any third-party sites you visit.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              10. Children’s Privacy
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children
              under 13. If we become aware of any such data, we will take prompt
              action to delete it.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">
              11. Changes to This Privacy Policy
            </p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              Hilance reserves the right to amend this Privacy Policy at any
              time. We will notify you of any significant changes by updating
              the Effective Date and posting the revised policy on our website.
              We encourage you to review this Privacy Policy periodically for
              any updates.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold mt-5 xl:text-xl">12. Contact Us</p>
            <p className="text-sm py-3 xl:text-lg text-[#605e5e]">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal data, please contact us at:
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
    </div>
  );
};

export default PrivacyPolicy;
