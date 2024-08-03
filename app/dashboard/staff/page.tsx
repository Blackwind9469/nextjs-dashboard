import { fetchFilteredStaff } from "@/app/lib/data";
import StaffTable from "@/app/ui/staff/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  const staff = await fetchFilteredStaff(query);

  return (
    <main>
      <StaffTable staff={staff} />
    </main>
  );
}
