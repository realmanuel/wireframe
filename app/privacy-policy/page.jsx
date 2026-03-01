import PolicyLayout from "../components/PolicyLayout";

export default function PrivacyPolicy() {
    return (
        <PolicyLayout title="PRIVACY POLICY">

        <p className="text-sm"> 
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p> 

        <h3 className="font-normal text-xl text-start mt-11">INFORMATION WE COLLECT</h3><hr />
        <p className="m-3 text-sm">
            • Name, email address, phone number, and shipping address
        </p>
        <p className="m-3 text-sm">
            • Payment information (processed securely through our payment provider)
        </p>
        <p className="m-3 text-sm">
            • Order history and preferences
        </p>
        <p className="m-3 text-sm">
            • Website usage data and analytics
        </p>

        <h3 className="font-normal text-xl text-start mt-11">HOW WE USE YOUR INFORMATION</h3><hr />
        <p className="m-3 text-sm">
            • To process and fulfill your orders
        </p>
        <p className="m-3 text-sm">
            • To communicate about your orders and our services
        </p>
        <p className="m-3 text-sm">
            • To improve our website and customer experience
        </p>
        <p className="m-3 text-sm">
            • To send marketing communications (with your consent)
        </p>

        <h3 className="font-normal text-xl text-start mt-11">DATA SECURITY</h3><hr />
        <p className="m-3 text-sm">
            • We use industry-standard security measures to protect your information
        </p>
        <p className="m-3 text-sm">
            • Payment information is encrypted and processed securely
        </p>
        <p className="m-3 text-sm">
            • We do not store full credit card details on our servers
        </p>

        <h3 className="font-normal text-xl text-start mt-11">YOUR RIGHTS</h3><hr />
        <p className="m-3 text-sm">
            • You can request access to your personal information
        </p>
        <p className="m-3 text-sm">
            • You can request correction of inaccurate information
        </p>
        <p className="m-3 text-sm">
            • You can opt out of marketing communications
        </p>
        <p className="m-3 text-sm">
            • You can request deletion of your information (subject to legal requirements)
        </p>

        </PolicyLayout>
    );
}

