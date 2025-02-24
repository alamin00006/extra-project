


export const metadata = {
  title: "Citzen | Company Profile",
  description: "Company Profile",
};

const CompanyProfile = () => {
  return (
    <div style={{ height: '600px' }}>
    <iframe 
      src="/images/CBC-Company-Profile.pdf" 
      width="100%" 
      height="100%" 
      style={{ border: 'none' }}
    />
  </div>
  );
};

export default CompanyProfile;
