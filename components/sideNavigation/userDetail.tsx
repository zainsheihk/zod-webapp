import Image from "next/image";
import React from "react";
import defaultUserProfile from "@public/userDefault.png";

function UserDetail() {
  return (
    <div className="userDetail">
      <Image src={defaultUserProfile} alt="" />
      <h5 className="userDetail_name">Reseller_801</h5>
      <div className="zodstar">
        <span className="zodstar">
          ZODSTER
          <span>Track ID</span>
        </span>
        <span>SA0101</span>
      </div>
    </div>
  );
}

export default UserDetail;
