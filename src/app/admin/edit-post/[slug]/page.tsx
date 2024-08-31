import EditPostForm from "@/components/Admin/EditPostForm";

export default function EditPost({ params }: { params: { slug: string } }) {
  return <EditPostForm params={params.slug} />;
}
