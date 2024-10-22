import { UpdatePostForm } from "@/components/admin/UpdatePostForm";

export default function UpdatePost({ params }: { params: { slug: string } }) {
  return <UpdatePostForm slug={params.slug} />;
}
