import CatalogClientPage from "@/components/CatalogPage";

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return <CatalogClientPage initialCategory={searchParams.category ?? null} />;
}
