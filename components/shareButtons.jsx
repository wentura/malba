"use client";

import React from "react";

const SHARE_TEXT =
  "Penzion Malba – ubytování v srdci Kokořínska. Rodinný penzion s restaurací v CHKO Kokořínsko.";

function getShareUrl() {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
  return "https://penzionmalba.cz/";
}

function shareFacebook() {
  const url = encodeURIComponent(getShareUrl());
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    "_blank",
    "width=600,height=400"
  );
}

function shareWhatsApp() {
  const url = getShareUrl();
  const text = encodeURIComponent(`${SHARE_TEXT} ${url}`);
  window.open(
    `https://wa.me/?text=${text}`,
    "_blank",
    "width=600,height=400"
  );
}

function shareEmail() {
  const url = getShareUrl();
  const subject = encodeURIComponent("Penzion Malba – ubytování v Kokořínsku");
  const body = encodeURIComponent(`${SHARE_TEXT}\n\n${url}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

export default function ShareButtons() {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <p className="text-sm text-gray-600">Sdílet stránku:</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={shareFacebook}
          className="px-4 py-2 text-sm font-medium text-white bg-[#1877f2] rounded-lg hover:bg-[#166fe5] transition-colors"
          aria-label="Sdílet na Facebooku"
        >
          Facebook
        </button>
        <button
          type="button"
          onClick={shareWhatsApp}
          className="px-4 py-2 text-sm font-medium text-white bg-[#25d366] rounded-lg hover:bg-[#20bd5a] transition-colors"
          aria-label="Sdílet přes WhatsApp"
        >
          WhatsApp
        </button>
        <button
          type="button"
          onClick={shareEmail}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          aria-label="Sdílet e-mailem"
        >
          E-mail
        </button>
      </div>
    </div>
  );
}
