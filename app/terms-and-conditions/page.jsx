import PolicyLayout from "../components/PolicyLayout";

export default function TermsOfService() {
    return (
        <PolicyLayout title="TERMS AND CONDITIONS">

        <p className="text-sm"> 
            By using our website and making purchases, you agree to these terms and conditions.
        </p> 

        <h3 className="font-normal text-xl text-start mt-11">ORDERS</h3><hr />
        <p className="m-3 text-sm">
            • All orders are subject to product availability
        </p>
        <p className="m-3 text-sm">
            • We reserve the right to refuse or cancel orders
        </p>
        <p className="m-3 text-sm">
            • Prices are subject to change without notice
        </p>
        <p className="m-3 text-sm">
            • We are not responsible for typographical errors in pricing
        </p>

        <h3 className="font-normal text-xl text-start mt-11">PAYMENT</h3><hr />
        <p className="m-3 text-sm">
            • Payment is required at the time of order
        </p>
        <p className="m-3 text-sm">
            • We accept major credit cards and other payment methods as indicated
        </p>
        <p className="m-3 text-sm">
            • All prices are in the currency displayed
        </p>
        <p className="m-3 text-sm">
            • International orders may be subject to currency conversion fees
        </p>

        <h3 className="font-normal text-xl text-start mt-11">INTELLECTUAL PROPERTY</h3><hr />
        <p className="m-3 text-sm">
            • All content on this website is the property of Ituen Basi
        </p>
        <p className="m-3 text-sm">
            • Images, designs, and text are protected by copyright
        </p>
        <p className="m-3 text-sm">
            • Unauthorized use of our content is prohibited
        </p>

        <h3 className="font-normal text-xl text-start mt-11">LIMITATION OF LIABILITY</h3><hr />
        <p className="m-3 text-sm">
            • We are not liable for indirect or consequential damages
        </p>
        <p className="m-3 text-sm">
            • Our liability is limited to the value of the products purchased
        </p>
        <p className="m-3 text-sm">
            • We are not responsible for delays caused by shipping carriers or customs
        </p>

        </PolicyLayout>
    );
}

