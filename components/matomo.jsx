import React from "react";
import Image from "next/image";

export default function Matomo() {
  return (
    <div>
      <Image
        referrerPolicy="no-referrer-when-downgrade"
        src="http://matomo.zbyneksvoboda.cz/matomo.php?idsite=15&rec=1"
        className="border-0 opacity-0"
        alt="matomo analytics"
        width={1}
        height={1}
        unoptimized={true}
      />
    </div>
  );
}
