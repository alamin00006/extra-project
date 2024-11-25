import AuthPage from "@/components/Pages/LoginSignup";

export const metadata = {
  title: "Citzen | Login",
  description: "Citezen Login",
};

const LoginPage = () => {
  return (
    <>
      <section className="bg-[#f1fbf9]">
        <div className="custom-container pt-20 ">
          <AuthPage />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
