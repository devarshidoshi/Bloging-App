import Link from "next/link";
import SignupComponent from "../components/auth/SignupComponent";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="text-center pt-4 pb-4">
        <h2>Signup</h2>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
