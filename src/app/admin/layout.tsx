"use client";
import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Dashboard</NavLink>
        <NavLink href="/admin/product">Products</NavLink>
        <NavLink href="/admin/users">Customer</NavLink>
        <NavLink href="/admin/orders">Orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
