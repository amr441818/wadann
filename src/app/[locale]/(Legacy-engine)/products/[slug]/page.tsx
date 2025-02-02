import Container from "@/app/components/shared/container";
import ProductConect from "@/app/components/product/ProductConect";
import { getProduct } from "@/lib/serverActions";

interface LayoutProps {
  params: Promise<{ locale: string | any; slug: string }>;
}
export default async function Page({ params }: LayoutProps) {
  const { locale, slug } = await params;

  const { data: productData } = await getProduct(slug);

  console.log("productData:aaaaaaaaaaaaaaaaaaaaaaaaaa ", productData);
  

  return (
    <Container>
      <ProductConect productData={productData} />
    </Container>
  );
}
