import { useState } from "react";

import { auth } from "../api";

function useProfileCheck() {
  const [data, setData] = useState<
    null | { email: string; userId: string } | false
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string | unknown>(null);

  async function getProfile() {
    try {
      setIsLoading(true);
      const profile = await auth.getUserProfile("");

      if (!profile) throw "Something went wrong while fetching profile";
      setData(profile);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, getProfile };
}

export default useProfileCheck;
