import Image from "next/image";
import ItemField from "@/app/components/ItemFormField";
import ItemForm from "@/app/components/ItemFormField";
import ItemList from "@/app/components/ItemList";

export default function Home() {
  return (
    <main>
      <div>
          <ItemForm></ItemForm>
          <ItemList></ItemList>
      </div>
    </main>
  );
}
