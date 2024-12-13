import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function () {
    const session = await getServerSession();
    return <div>
        <Appbar />
        User component
        {JSON.stringify(session)}
    </div>
}