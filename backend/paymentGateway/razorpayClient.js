import Razorpay from 'razorpay'

const keyId = "rzp_test_iM7atEW0Pt3NF1"
const secretKey = "TKrDu7oq1KhsA3UlgC4TF9nM"

export const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: secretKey,
});