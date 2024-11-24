import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>マイページ</h1>
      <Link href={"/form"}>フォーム画面</Link>
    </>
  );
}
