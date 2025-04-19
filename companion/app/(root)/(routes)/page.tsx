import SearchInput from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import prismadb from "@/lib/prismadb";
import { Categories } from "@/components/categories";

const RootPage = async () => {
  const categories = await prismadb.category.findMany()
  return ( 
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
   );
}
 
export default RootPage;
