import React from 'react';

const PrivacyPolicy = () => {
    const styles = {
        container: {
            backgroundColor: '#ebe4d3',
            borderRadius: '5px',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        section: {
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Privacy Policy for Resume and Offer Letter Generator App</h1>
            <p>
                Effective Date: 2 July 2023
            </p>
            <div style={styles.section}>
                <h2>1. Information We Collect</h2>
                <p>
                    We may collect personal information that you voluntarily provide to us when using the App. This may include:
                </p>
                <ul>
                    <li>Contact Information: Name, email address, phone number, and mailing address.</li>
                    <li>Resume Information: Educational background, work experience, skills, and other relevant personal details.</li>
                    <li>Offer Letter Information: Employer details, job position, compensation details, and other relevant personal details.</li>
                </ul>
            </div>
            <div style={styles.section}>
                <h2>2. Use of Information</h2>
                <p>
                    We use the collected personal information to provide you with the requested services, such as generating resumes and offer letters based on the information you provide.
                </p>
                <p>
                    We may also use the information for the following purposes:
                </p>
                <ul>
                    <li>Communicating with you and responding to your inquiries.</li>
                    <li>Sending you updates, notifications, and information related to the App.</li>
                    <li>Analyzing usage data to improve the App and enhance the user experience.</li>
                    <li>Complying with applicable laws, regulations, legal processes, or governmental requests.</li>
                </ul>
            </div>
            <div style={styles.section}>
                <h2>3. Data Sharing</h2>
                <p>
                    We may share your personal information in the following circumstances:
                </p>
                <ul>
                    <li>
                        <strong>Third-Party Service Providers:</strong> We may engage trusted third-party service providers to assist us in operating and maintaining the App. These service providers may have access to personal information only to perform tasks on our behalf and are obligated to keep it confidential.
                    </li>
                    <li>
                        <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business assets, personal information may be transferred as part of the transaction. We will notify you via email or prominent notice within the App in such cases.
                    </li>
                    <li>
                        <strong>Consent:</strong> We will obtain your consent before sharing your personal information with third parties for purposes other than those outlined in this Privacy Policy.
                    </li>
                </ul>
            </div>
            <div style={styles.section}>
                <h2>4. Data Security</h2>
                <p>
                    We take reasonable measures to protect the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your data.
                </p>
            </div>
            <div style={styles.section}>
                <h2>5. Children's Privacy</h2>
                <p>
                    The App is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that personal information of a child under 13 has been collected without parental consent, we will take steps to remove the information promptly.
                </p>
            </div>
            <div style={styles.section}>
                <h2>6. Your Choices</h2>
                <p>
                    You have the following choices regarding your personal information:
                </p>
                <ul>
                    <li>
                        <strong>Access and Update:</strong> You can access, review, and update your personal information within the App. Please ensure that your information remains accurate and up to date.
                    </li>
                    <li>
                        <strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by following the instructions in the communication or contacting us directly. However, we may still send you non-promotional messages related to your use of the App.
                    </li>
                </ul>
            </div>
            <div style={styles.section}>
                <h2>7. Changes to this Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the revised policy within the App or by other means of communication. We encourage you to review this Privacy Policy periodically.
                </p>
            </div>
            <div style={styles.section}>
                <h2>8. Contact Us</h2>
                <p>
                    If you have any questions, concerns, or feedback regarding this Privacy Policy or our privacy practices, please contact us at <b>digantasen2002@gmail.com</b>.
                </p>
            </div>
            <p>
                By using the App, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
