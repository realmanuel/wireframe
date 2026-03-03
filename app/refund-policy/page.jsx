import PolicyLayout from "../components/PolicyLayout";

export default function RefundPolicy() {
    return (
        <PolicyLayout title="REFUND POLICY">

        <p className="text-sm"> 
            We want you to be completely satisfied with your purchase.
        </p> 

        <h3 className="font-normal text-xl text-start mt-11">ELIGIBILITY</h3><hr />
        <p className="m-3 text-sm">
            • Refunds available for items returned within 14 days of delivery
        </p>
        <p className="m-3 text-sm">
            • Items must be unworn, unwashed, and in original packaging
        </p>
        <p className="m-3 text-sm">
            • Couture and custom pieces are final sale and not eligible for refunds
        </p>
        <p className="m-3 text-sm">
            • Sale items may have different return policies as indicated
        </p>

        <h3 className="font-normal text-xl text-start mt-11">REFUND PROCESS</h3><hr />
        <p className="m-3 text-sm">
            • Contact us to initiate a return and receive authorization
        </p>
        <p className="m-3 text-sm">
            • Return items using the provided shipping label
        </p>
        <p className="m-3 text-sm">
            • Once we receive and inspect the items, we will process your refund
        </p>
        <p className="m-3 text-sm">
            • Refunds are issued to the original payment method
        </p>

        <h3 className="font-normal text-xl text-start mt-11">REFUND TIMELINE</h3><hr />
        <p className="m-3 text-sm">
            • Refunds processed within 5-7 business days of receiving returned items
        </p>
        <p className="m-3 text-sm">
            • It may take additional time for the refund to appear in your account
        </p>
        <p className="m-3 text-sm">
            • Shipping costs are non-refundable unless the item is defective or incorrect
        </p>


        </PolicyLayout>
    );
}



