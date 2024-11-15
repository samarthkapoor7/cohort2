import client from "@/db";

async function fetchData() {
  const user = await client.user.findFirst();

  return {
      email: user?.email,
      name: "samarth"
  }
}

export default async function User() {
    const data = await fetchData();
    
    return (
      <div>
        {data.name}
        {data.email}
      </div>
    );
  }