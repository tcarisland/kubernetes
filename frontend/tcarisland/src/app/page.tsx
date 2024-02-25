import Image from "next/image";
import ItemField from "@/app/components/ItemForm";
import ItemForm from "@/app/components/ItemForm";

export default function Home() {
  return (
    <main>
      <div>
          <ItemForm fields={[
              {labelname: "fname", labeltitle: "First Name"},
              {labelname: "lname", labeltitle: "Last Name"}
          ]}></ItemForm>
      </div>
    </main>
  );
}
