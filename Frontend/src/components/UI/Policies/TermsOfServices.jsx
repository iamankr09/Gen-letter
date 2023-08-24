import React from 'react';
import './TermsOfServices.css'; // Import the CSS file

const TermsOfServices = () => {
    return (
        <div className="terms-of-service-container">
            <h1>Terms of Service for Resume and Offer Letter Generator App</h1>
            <p>Effective Date: 2 July 2023</p>
            <p>
                Please read these Terms of Service ("Terms") carefully before using the Resume and Offer Letter Generator App (referred to as "the App") operated by GenLetter (referred to as "we," "us," or "our").
            </p>

            <div className="section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the App.
                </p>
            </div>

            <div className="section">
                <h2>2. Use of the App</h2>
                <div className="subsection">
                    <h3>2.1 Eligibility:</h3>
                    <p>
                        You must be at least 13 years old to use the App. By using the App, you represent and warrant that you meet this eligibility requirement.
                    </p>
                </div>
                <div className="subsection">
                    <h3>2.2 User Account:</h3>
                    <p>
                        Certain features of the App may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                </div>
                <div className="subsection">
                    <h3>2.3 Accuracy of Information:</h3>
                    <p>
                        You are solely responsible for the accuracy and completeness of the information you provide through the App. We do not verify the accuracy of the information you provide and are not responsible for any errors or omissions.
                    </p>
                </div>
                <div className="subsection">
                    <h3>2.4 Prohibited Activities:</h3>
                    <p>
                        When using the App, you agree not to:
                    </p>
                    <ul>
                        <li>Violate any applicable laws or regulations.</li>
                        <li>Infringe upon the rights of others.</li>
                        <li>Use the App for any unlawful or unauthorized purpose.</li>
                        <li>Transmit any viruses, worms, or malicious code.</li>
                        <li>Interfere with or disrupt the functionality of the App.</li>
                        <li>Attempt to gain unauthorized access to any portion of the App.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <h2>3. Intellectual Property</h2>
                <div className="subsection">
                    <h3>3.1 Ownership:</h3>
                    <p>
                        The App and its original content, features, and functionality are owned by us and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any part of the App without our prior written consent.
                    </p>
                </div>
                <div className="subsection">
                    <h3>3.2 Feedback:</h3>
                    <p>
                        If you provide us with any feedback, suggestions, or ideas regarding the App, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, distribute, and display such feedback for any purpose.
                    </p>
                </div>
            </div>

            <div className="section">
                <h2>4. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or related to your use or inability to use the App or any content or services provided through the App.
                </p>
            </div>

            <div className="section">
                <h2>5. Indemnification</h2>
                <p>
                    You agree to indemnify and hold us harmless from any claims, liabilities, damages, losses, and expenses, including attorney's fees, arising out of or related to your use of the App, violation of these Terms, or infringement of any rights of others.
                </p>
            </div>

            <div className="section">
                <h2>6. Modifications to the App and Terms</h2>
                <p>
                    We reserve the right to modify, suspend, or discontinue the App or any part thereof at any time without prior notice. We may also revise these Terms from time to time. By continuing to use the App after any modifications to the Terms, you agree to be bound by the revised Terms.
                </p>
            </div>

            <div className="section">
                <h2>7. Governing Law and Dispute Resolution</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes arising out of or relating to these Terms or the App shall be resolved exclusively through binding arbitration in accordance with the rules of [Insert Arbitration Organization] in [Insert Jurisdiction].
                </p>
            </div>

            <div className="section">
                <h2>8. Severability</h2>
                <p>
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
            </div>

            <div className="section">
                <h2>9. Entire Agreement</h2>
                <p>
                    These Terms constitute the entire agreement between you and us regarding the App and supersede all prior or contemporaneous understandings and agreements.
                </p>
            </div>

            <div className="section">
                <h2>10. Contact Us</h2>
                <p>
                    If you have any questions, concerns, or feedback regarding these Terms, please contact us at <b>digantasen2002@gmail.com</b>.
                </p>
            </div>

            <p className="acknowledgement">
                By using the App, you acknowledge that you have read and understood these Terms and agree to comply with them.
            </p>
        </div>
    );
};

export default TermsOfServices;
