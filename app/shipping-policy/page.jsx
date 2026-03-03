import PolicyLayout from "../components/PolicyLayout";

export default function ShippingPolicy() {
    return (
        <PolicyLayout title="SHIPPING POLICY">

        <p className="text-sm"> 
            We want you to be completely satisfied with your purchase.
        </p> 

        <h3 className="font-normal text-xl text-start mt-11">NIGERIA DELIVERY</h3><hr />
        <p className="m-3 text-sm">
            • Standard delivery: 3-5 business days
        </p>
        <p className="m-3 text-sm">
            • Express delivery available: 1-2 business days
        </p>
        <p className="m-3 text-sm">
            • Free shipping on orders over ₦50,000
        </p>

        <h3 className="font-normal text-xl text-start mt-11">INTERNATIONAL DELIVERY</h3><hr />
        <p className="m-3 text-sm">
            • Standard delivery: 7-14 business days
        </p>
        <p className="m-3 text-sm">
            • Express delivery available: 3-5 business days
        </p>
        <p className="m-3 text-sm">
            • Duties and taxes may apply and are the customer responsibility
        </p>

        <h3 className="font-normal text-xl text-start mt-11">TRACKING</h3><hr />
        <p className="m-3 text-sm">
            • You will receive a tracking number via email once your order ships
        </p>
        <p className="m-3 text-sm">
            • Track your order on the DHL website using your tracking number
        </p>

        </PolicyLayout>
    );
}



