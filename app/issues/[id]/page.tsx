import { redirect } from "next/navigation";

type Params = {
  id: string;
};

const ID = ({ params }: { params: Params }) => {
  console.log(params);
  if (params.id === "2") {
    redirect("/dashboard");
  }
  return <div>{params.id}</div>;
};

export default ID;
