import { FetchError, post } from "@/types";
import supabase from "@/utils/supabase";

export async function fetchBlogPosts(): Promise<{
  blogPosts: post[] | null;
  error: FetchError | null;
}> {
  try {
    const { data, error } = await supabase.from("blogPosts").select("*");

    console.log("Supabase Response:", data, error);

    if (error) {
      return { blogPosts: null, error: { message: error.message } };
    } else {
      return { blogPosts: data || [], error: null };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { blogPosts: null, error: { message: error.message } };
    } else {
      return { blogPosts: null, error: { message: String(error) } };
    }
  }
}
