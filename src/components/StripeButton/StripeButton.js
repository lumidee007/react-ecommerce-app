import StripeCheckout from "react-stripe-checkout";

const  StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100
    const publishableKey = "pk_test_51K61yFBWuUbjH8jo6sD78pcR3v1ompUkgKe2YdaiijM0lEk7pB269TkTdz8dvXJHTZWJeEWwSUi5OPlaLWSqwfkw00oKmr0Fqb"

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label = "Pay now"
            name = "CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image = ""
            description={`your total price is $${price}`}
            amount={priceForStrip}
            panelLabel="Pay Now"
            token = {onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton