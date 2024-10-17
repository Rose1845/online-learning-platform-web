import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../../utils/customtable";
import useApi from "../../hooks/useApi";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { User } from "../../../types";

export default function UserList(): React.ReactElement {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const { publicApi } = useApi();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await publicApi.get("/users");
        console.log(response.data, "response");
        setUserData(response.data);
      } catch (err) {
        console.log(error);
        // setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [error, publicApi]);

  const cols = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "number",
        header: "#",
        cell: ({ row }) => <span>{row?.index + 1}</span>,
      },
      {
        header: "Full Name",
        accessorKey: "fullName",
      },
      {
        header: "PhoneNumber",
        accessorKey: "phoneNumber",
      },
      {
        header: "Email",
        accessorKey: "email",
      },

      {
        header: "Status",
        accessorKey: "",
        cell: () => {
          // const user = info.row.original as User;
          return (
            <div>
              {/* {user. === "Active" && (
                <span className="border-color-primary font-bold border-2 text-neutral-900 p-3 rounded-full">
                  {user.status}
                </span>
              )}
              {user.status === "Inactive" && (
                <span className="bg-red-600 font-bold text-white p-3 rounded-full">
                  {user.status}
                </span>
              )}
              {user.status === "Suspended" && (
                <span className="bg-yellow-600 font-bold text-white p-3 rounded-full">
                  {user.status}
                </span>
              )} */}
              <p>view</p>
            </div>
          );
        },
      },
      {
        header: "Actions",
        cell: (info) => {
          const user = info.row.original as User;

          return (
            <div>
              <Link to={`/admin/user/${user.id}`}>
                <p className="text-xl text-blue-500">View Details</p>
              </Link>
            </div>
          );
        },
        accessorKey: "actions",
      },
    ],
    []
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-5">
      <CustomTable data={userData} columns={cols} />
    </div>
  );
}
