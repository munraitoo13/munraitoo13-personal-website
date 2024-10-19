import { EditPostForm } from "@/components/admin/EditPostForm";

export default function EditPost({ params }: { params: { slug: string } }) {
  return <EditPostForm slug={params.slug} />;
}
