import * as admin from "firebase-admin"
import { buffer } from "micro"

// secure a connection to firebase from the backend
const serviceAccount = require("../../../serviceAccountKey.json")

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app()

// establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session)

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success: Order ${session.id} has been added to the db`)
    })
}

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers["stripe-signature"]

    let event
    // Verify webhook signature and extract the event.
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
    } catch (err) {
      console.log(err.message)
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    // handle the checkout session completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object

      // Fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send("Webhook error"))
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
