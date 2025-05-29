"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only runs on the client
    if (window === window.parent && !window.opener) {
      setIsVisible(true);
    }
  }, []);

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  if (!isVisible) return null;

  return (
    <div>
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}