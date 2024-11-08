import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

type BlogPost = Database["public"]["Tables"]["blogPosts"]["Row"];

type FetchBlogPostsResult = {
  data: BlogPost | null;
  error: string | null;
};

export async function fetchBlogPost({
  id,
}: {
  id: number;
}): Promise<FetchBlogPostsResult> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("blogPosts")
    .select()
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return { data: null, error: error.message };
  }
  return { data, error: null };
}
