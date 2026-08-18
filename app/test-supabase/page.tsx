"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("Testing connection...");

  useEffect(() => {
    const testConnection = async () => {
      const supabase = createClient();

      const { error } = await supabase
        .from("test_connection")
        .select("*")
        .limit(1);

      if (error) {
        setStatus(`Connection reached Supabase: ${error.message}`);
      } else {
        setStatus("Supabase connection is working!");
      }
    };

    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900">
          Supabase Connection
        </h1>

        <p className="mt-4 text-slate-600">
          {status}
        </p>
      </div>
    </main>
  );
}