"use client";

import { ReactNode } from "react";
import BottomTab from "@/components/layout/BottomTab";
import HomeHeader from "@/components/layout/HomeHeader";
import PageHeader from "@/components/layout/PageHeader";
import { usePathname } from "next/navigation";
import { allNavigationRoutes, routeNav, tabs } from "@/data/commom";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  const headerName = () => {
    const pageName = allNavigationRoutes.find((tab: routeNav) => tab.path === pathname)?.name;
    if (pageName) {
      return pageName;
    } else if (pathname.startsWith("/cs")) {
      return "고객센터";
    }
    return "전체 메뉴";
  };

  return (
    <>
      {/* ============================= */}
      {/* ======= 모달 공통 사용 : s ===== */}
      {/* ============================= */}
      {/* <>{isOpen && <MultiModal modalType={type} onClose={closeModal} data={data} />}</> */}
      {/* ============================= */}
      {/* ======= 헤더 공통 사용 : s ======*/}
      {/* ============================= */}
      <div
        className="relative max-w-[600px] w-full min-h-screen mx-auto bg-white flex
	flex-col"
      >
        <>{pathname === "/" ? <HomeHeader /> : <PageHeader locatedTitle={headerName()} />}</>
        {children}
        <BottomTab tabs={tabs} />
        {/* ============================= */}
        {/* ====== 헤더 공통 사용 : e ====== */}
        {/* ============================= */}
      </div>
    </>
  );
}
