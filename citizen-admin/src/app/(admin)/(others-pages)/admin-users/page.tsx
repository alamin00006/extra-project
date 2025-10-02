import AdminUserLists from "@/components/AdminUsers/AdminUserLists/AdminUserLists";

export const metadata = {
  title: "Admin Users",
};

const AdminUsers = async () => {
  return (
    <>
      <AdminUserLists />
    </>
  );
};

export default AdminUsers;
